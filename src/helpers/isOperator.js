const operators = ["+", "-", "*", "/"];

function isOperator(str) {
  return operators.includes(str);
}

module.exports = isOperator;
