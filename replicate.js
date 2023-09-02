// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5].
// If the times argument is negative, return an empty array.

function replicateWithoutRecursive(repeat, value) {
  let result = [];
  if (repeat <= 0) return result;

  for (let i = 0; i < repeat; i++) {
    result.push(value);
  }

  return result;
}

function replicateRecursive(repeat, value) {
  let result = [];

  if (repeat <= 0) {
    return result;
  } else {
    result = replicateRecursive(repeat - 1, value);
    result.push(value);
  }

  return result;
}

// solution

function replicate(times, number) {
  if (times <= 0) return [];

  return [number].concat(replicate(times - 1, number));
}

console.log(replicateWithoutRecursive(3, 5)); // [5, 5, 5]
console.log(replicateWithoutRecursive(1, 69)); // [69]
console.log(replicateWithoutRecursive(-2, 6)); // []

console.log(replicateRecursive(3, 5)); // [5, 5, 5]
console.log(replicateRecursive(1, 69)); // [69]
console.log(replicateRecursive(-2, 6)); // []

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
