// Calculates the Operation between two values
const operationParser = (operator, val1, val2) => {
  const numVal1 = parseFloat(val1);
  const numVal2 = parseFloat(val2);
  if (operator === "+") {
    return numVal1 + numVal2;
  }
  if (operator === "-") {
    return numVal1 - numVal2;
  }
  if (operator === "*") {
    return numVal1 * numVal2;
  }
  if (operator === "/") {
    return numVal1 / numVal2;
  }
};

module.exports = operationParser;
