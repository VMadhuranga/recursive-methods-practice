// Write a function called sumRange.
// It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRangeWithoutRecursive(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function sumRangeRecursive(n) {
  if (n === 0) {
    return n;
  } else {
    return n + sumRangeRecursive(n - 1);
  }
}

// solution

function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRangeWithoutRecursive(4));
console.log(sumRangeRecursive(4));
console.log(sumRange(4));
