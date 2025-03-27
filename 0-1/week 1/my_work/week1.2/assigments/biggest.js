//Write a program to print the biggest number in an arrya

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggest = arr[0];
for (i = 0; i <= arr.length; i++) {
  if (arr[i] > biggest) {
    biggest = arr[i];
  }
}
