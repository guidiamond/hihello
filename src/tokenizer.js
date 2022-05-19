const isNumeric = require("./helpers/isNumeric");
const isOperator = require("./helpers/isOperator");

const isValidToken = (token) => {
  return (
    isNumeric(token) ||
    isOperator(token) ||
    token === "." ||
    token === "!" ||
    token === "%" ||
    token === "=" ||
    token === "c"
  );
};

const tokenizer = (input) => {
  return input.split(/(\D)/).filter(isValidToken);
};

module.exports = tokenizer;
