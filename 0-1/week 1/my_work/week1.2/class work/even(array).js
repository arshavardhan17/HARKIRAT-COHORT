//Write a program prints all the even numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

//LEARN HOW TO GIVE ARRAY AS INPUT

let myArray = [];
let arrayLength = prompt("Enter the number of elements for the array:");

for (let i = 0; i < arrayLength; i++) {
  let input = prompt(`Enter element ${i + 1}:`);
  myArray.push(input);
}

console.log(myArray);
