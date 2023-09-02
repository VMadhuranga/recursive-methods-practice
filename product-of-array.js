// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArrayWithOutRecursive(arr) {
  let result = 1;

  arr.forEach((value) => (result *= value));

  return result;
}

function productOfArrayRecursive(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    return arr.shift() * productOfArrayRecursive(arr);
  }
}

// solution

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}

console.log(productOfArrayWithOutRecursive([1, 2, 3])); // 6
console.log(productOfArrayWithOutRecursive([1, 2, 3, 10])); // 60

console.log(productOfArrayRecursive([1, 2, 3])); // 6
console.log(productOfArrayRecursive([1, 2, 3, 10])); // 60

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
