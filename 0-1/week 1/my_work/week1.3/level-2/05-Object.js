// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  // Returns an array of the object's property keys
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // Returns an array of the object's property values
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // Returns an array of key-value pairs as nested arrays
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // Checks if the object has a property named "property" and returns true or false
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // Creates a new object by copying properties from obj and adding a new property
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
