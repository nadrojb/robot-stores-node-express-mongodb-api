//this is how validation should be 
function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number' || !Number.isNaN(Number(value));
}

function isURL(value) {
  return typeof value === 'string';
}
