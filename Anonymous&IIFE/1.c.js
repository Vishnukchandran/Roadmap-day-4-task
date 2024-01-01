//1.c.Sum of all numbers in an array

//Anonymous
console.log("Anonymous function");
let add = function (numbers) {
  let sum1 = 0;
  for (const number of numbers) {
    sum1 = sum1 + number;
  }
  console.log("The sum of all numbers on array is:", sum1);
};
let numbers = add([3, 15, 20, 12]);

//IIFE
console.log("IIFE");
let add1 = (function (numbers1) {
  let sum2 = 0;
  for (const number1 of numbers1) {
    sum2 = sum2 + number1;
  }
  console.log("The sum of all numbers on array is:", sum2);
})([30, 5, 10]);
