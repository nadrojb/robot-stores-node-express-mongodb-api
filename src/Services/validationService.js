function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number" || !Number.isNaN(Number(value));
}

function isURL(value) {
  return typeof value === "string";
}

module.exports = isPhoneNumber;
