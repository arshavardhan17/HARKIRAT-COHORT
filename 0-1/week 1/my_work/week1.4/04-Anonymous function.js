function sumOfSomthing(a, b, fn) {
  let resultA = fn(a); //calling square function inside sumOfSomthing function
  let resultB = fn(b); //calling cube function inside sumOfSomthing function
  let sum = resultA + resultB;
  console.log(sum);
}

sumOfSomthing(2, 3, function (a) {
  let cube = a * a * a;
  return cube;
});

//no need to give name to function if we are calling it directly
