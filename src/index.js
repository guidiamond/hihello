const operationParser = require("./parsers/operationParser");
const tokenizer = require("./tokenizer");
const isNumeric = require("./helpers/isNumeric");
const isOperator = require("./helpers/isOperator");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let operands = [];
let operator = "";
let lastToken = "";

// Recursive input reader idea:
// https://stackoverflow.com/questions/24182097/node-js-endless-loop-function-quit-upon-certain-user-input
const inputReader = () => {
  rl.question("> ", (input) => {
    const tokens = tokenizer(input);
    let lastOperand = operands.slice(-1)[0];

    // Parse each token acording to its type
    tokens.forEach((token) => {
      switch (token) {
        case ".":
          // Hacky fix if user tries to do a .x operation (instead of typing 0.x)
          if (isOperator(lastToken)) token = "0.";
          break;

        case "=":
          // If there is a saved operator, do the operation
          if (operator) {
            operands = [
              operationParser(operator, operands[0] || 0, operands[1] || 0),
            ];
            operator = "";
          }
          break;

        case "c":
          // Remove last operand && show lastOperand as 0
          operands.pop();
          break;

        case "%":
          lastOperand = parseFloat(lastOperand) / 100;
          operands.splice(-1, 1, `${lastOperand}`); // Replace last value with modified value
          break;

        case "!":
          lastOperand = `${parseFloat(lastOperand) * -1}`;
          operands.splice(-1, 1, `${lastOperand}`); // Replace last value with modified value
          break;

        default:
          if (isNumeric(token)) {
            if (lastToken === ".") {
              // If user has typed a decimal, join tokens to correctly represent it
              operands.splice(-1, 1, `${lastOperand || 0}.${token}`); // Replace last value with modified value
            } else if (isNumeric(lastToken)) {
              // If user hasn't finished typing, join tokens to correctly represent it
              operands.splice(-1, 1, `${lastToken}${token}`); // Replace last value with modified value
            } else {
              operands.push(token);
            }
          }
          if (isOperator(token)) {
            // If an operator is already stored, do the operation
            if (operator) {
              operands = [
                operationParser(operator, operands[0] || 0, operands[1] || 0),
              ];
            }
            operator = token;
          }
          break;
      }
      lastToken = token;
      lastOperand = operands.slice(-1)[0];
    });

    console.log(lastOperand || "0"); // Always print last operand

    inputReader();
  });
};

console.log(0);
inputReader();
