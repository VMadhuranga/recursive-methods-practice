// Write a function that returns the factorial of a number.
// As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it,
// and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorialWithoutRecursive(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function factorialRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// solution

function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1); // pending multiplier
}

console.log(factorialWithoutRecursive(5));
console.log(factorialRecursive(5));
console.log(factorial(5)); // 120
