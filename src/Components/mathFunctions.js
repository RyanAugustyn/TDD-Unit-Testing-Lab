function addTwoNumbers(x, y) {
  if (typeof x !== "number" || isNaN(x) || typeof y !== "number" || isNaN(y)) {
    throw new Error("Invalid Input");
  }
  return x + y;
}

function divideTwoNumbers(x, y) {
  if (typeof x !== "number" || isNaN(x) || typeof y !== "number" || isNaN(y)) {
    throw new Error("Invalid Input");
  } else if (y === 0) {
    throw new Error("Error, can't divide by zero");
  }
  return x / y;
}

function multiplyTwoNumbers(x, y) {
  if (typeof x !== "number" || isNaN(x) || typeof y !== "number" || isNaN(y)) {
    throw new Error("Invalid Input");
  }
  return x * y;
}

function subtractTwoNumbers(x, y) {
  if (typeof x !== "number" || isNaN(x) || typeof y !== "number" || isNaN(y)) {
    throw new Error("Invalid Input");
  }
  return x - y;
}

export {
  addTwoNumbers,
  divideTwoNumbers,
  multiplyTwoNumbers,
  subtractTwoNumbers,
};
