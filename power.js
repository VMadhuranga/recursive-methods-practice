// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function powerWithoutRecursive(base, exponent) {
  return base ** exponent;
}

function powerRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerRecursive(base, exponent - 1);
  }
}

// solution

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(powerWithoutRecursive(2, 4)); // 16
console.log(powerWithoutRecursive(2, 3)); // 8
console.log(powerWithoutRecursive(2, 2)); // 4
console.log(powerWithoutRecursive(2, 1)); // 2
console.log(powerWithoutRecursive(2, 0)); // 1

console.log(powerRecursive(2, 4)); // 16
console.log(powerRecursive(2, 3)); // 8
console.log(powerRecursive(2, 2)); // 4
console.log(powerRecursive(2, 1)); // 2
console.log(powerRecursive(2, 0)); // 1

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
