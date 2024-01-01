// 2.c.Sum of all numbers in an array

//Arrow function

console.log("Arrow function");
let add = (numbers) => {
  let sum1 = 0;
  for (const number of numbers) {
    sum1 = sum1 + number;
  }
  console.log("The sum of all numbers on array is:", sum1);
};
let numbers = add([3, 15, 20, 12]);
