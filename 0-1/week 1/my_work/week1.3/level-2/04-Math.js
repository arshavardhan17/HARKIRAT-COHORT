function mathMethods(value) {
  console.log("Original Value:", value);

  // Rounds the value to the nearest integer
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // Rounds the value up to the nearest integer
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // Rounds the value down to the nearest integer
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // Returns the largest number from the given values (5, 10, 15)
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  // Returns the smallest number from the given values (5, 10, 15)
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  // Raises the value to the power of 2 (value^2)
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  // Returns the square root of the value
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
