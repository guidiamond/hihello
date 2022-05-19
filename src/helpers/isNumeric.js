function isNumeric(str) {
  return !Number.isNaN(parseFloat(str));
}

module.exports = isNumeric;
