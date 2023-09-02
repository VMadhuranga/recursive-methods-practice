// Write a function that sums squares of numbers in list that may contain more lists

function SumSquaresWithoutRecursive(arr) {
  let result = 0;

  arr.flat(Infinity).forEach((element) => {
    result += element ** 2;
  });

  return result;
}

function SumSquaresRecursive(arr) {
  let total = 0;

  for (let item of arr) {
    if (!Array.isArray(item)) {
      total += item ** 2;
    } else {
      total += SumSquaresRecursive(item);
    }
  }

  return total;
}

// solution

function SumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

let k = [1, 2, 3];
console.log(SumSquaresWithoutRecursive(k)); // 1 + 4 + 9 = 14

k = [[1, 2], 3];
console.log(SumSquaresWithoutRecursive(k)); // 1 + 4 + 9 = 14

k = [[[[[[[[[1]]]]]]]]];
console.log(SumSquaresWithoutRecursive(k)); // 1 = 1

k = [10, [[10], 10], [10]];
console.log(SumSquaresWithoutRecursive(k)); // 100 + 100 + 100 + 100 = 400

let r = [1, 2, 3];
console.log(SumSquaresRecursive(r)); // 1 + 4 + 9 = 14

r = [[1, 2], 3];
console.log(SumSquaresRecursive(r)); // 1 + 4 + 9 = 14

r = [[[[[[[[[1]]]]]]]]];
console.log(SumSquaresRecursive(r)); // 1 = 1

r = [10, [[10], 10], [10]];
console.log(SumSquaresRecursive(r)); // 100 + 100 + 100 + 100 = 400

const l = [1, 2, 3];
console.log(SumSquares(l)); // 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 400
