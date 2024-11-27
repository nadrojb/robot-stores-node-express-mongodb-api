function isString(value) {
  if (typeof value === "string") {
    return value;
  } else {
    return Error("not a string");
  }
}

function isNumber(value) {
  if (typeof value === "number" || !Number.isNan(Number(a))) {
    return Number(value);
  } else {
    return Error("not a number");
  }
}

function isNull(value) {
  if (typeof value === null) {
    return true;
  } else {
    return false;
  }
}
function isUndefined(value) {
  if (typeof value === undefined) {
    return true;
  } else {
    return false;
  }
}

function validateNullOrUndefined(value) {
  if (isNull(value) || isUndefined(value)) {
    return null;
  } else {
    return a;
  }
}

function validateStringOrNull(value) {
  if (typeof value === "string" || isNull(value)) {
    return value;
  } else {
    return Error("Not a string or null");
  }
}
