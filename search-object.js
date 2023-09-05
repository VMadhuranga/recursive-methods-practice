// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function containsRecursive(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return true;
    } else {
      return containsRecursive(object[key], value);
    }
  }

  return false;
}

// solution

function contains(obj, value) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

console.log(containsRecursive(nestedObject, 44)); // true
console.log(containsRecursive(nestedObject, "foo")); // false
console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "foo")); // false
