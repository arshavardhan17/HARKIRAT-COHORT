//calling one function inside another function is called call backs

function square(a) {
  let square = a * a;
  return square;
}

function cube(a) {
  let cube = a * a * a;
  return cube;
}
function sumOfSquares(a, b) {
  let squareA = square(a);
  let squareB = square(b); //calling square function inside sumOfSquares function
  let sum = squareA + squareB;
  return sum;
}
console.log(sumOfSquares(2, 3)); // 13

function sumOfCubes(a, b) {
  let cubeA = cube(a);
  let cubeB = cube(b); //calling cube function inside sumOfCubes function
  let sum = cubeA + cubeB;
  return sum;
}
console.log(sumOfCubes(2, 3)); // 35

//dry principle is voilated
//we can use call back function to avoid this

function square(a) {
  let square = a * a;
  return square;
}

function cube(a) {
  let cube = a * a * a;
  return cube;
}

function sumOfSomthing(a, b, fn) {
  let resultA = fn(a); //calling square function inside sumOfSomthing function
  let resultB = fn(b); //calling cube function inside sumOfSomthing function
  let sum = resultA + resultB;
  return sum;
}
console.log(sumOfSomthing(2, 3, square)); // 13
