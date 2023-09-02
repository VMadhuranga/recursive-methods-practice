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
      return contains(object[key], value);
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

containsRecursive(nestedObject, 44); // true
containsRecursive(nestedObject, "foo"); // false
contains(nestedObject, 44); // true
contains(nestedObject, "foo"); // false
