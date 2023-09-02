function totalIntegersWithOutRecursive(arr) {
  let count = 0;

  arr.flat(Infinity).forEach((element) => {
    if (typeof element === "number") {
      count++;
    }
  });

  return count;
}

function totalIntegersRecursive(arr) {
  for (let item of arr) {
    let total = 1;
    if (typeof item === "number") {
      return item;
    } else {
      return total + totalIntegersRecursive(item);
    }
  }
}

// solution

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

console.log(totalIntegersRecursive([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));
console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));
console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));
