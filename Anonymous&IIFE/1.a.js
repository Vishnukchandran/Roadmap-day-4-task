//1.a.Print odd numbers in an array

// Anonymous function
console.log("Anonymous function");
let Odd = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
  return array;
};
Odd([1, 21, 33, 45, 50, 66, 77, 92, 100]);

//IIFE function
console.log("IIFE");
let Odd1 = (function (array1) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
      console.log(array1[i]);
    }
  }
  return array1;
})([1, 22, 33, 44, 50, 69]);
