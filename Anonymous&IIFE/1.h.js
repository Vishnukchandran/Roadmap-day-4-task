// 1.h.Rotate an array by k times

//Anonymous
let array = [1, 2, 3, 4, 5];
let k = 3;

let rotateArray = function (array, times) {
  let length = array.length;
  let rotations = times % length;

  let rotatedArray = array.slice(rotations).concat(array.slice(0, rotations));
  return rotatedArray;
};
console.log("Anonymous function");
let result = rotateArray(array, k);
console.log(result);

//IIFE
let array1 = [1, 2, 3, 4, 5];
let k1 = 3;

const result1 = (function (array1, times1) {
  let length1 = array1.length;
  let rotations1 = times1 % length1;

  let rotatedArray1 = array1
    .slice(rotations1)
    .concat(array1.slice(0, rotations1));
  return rotatedArray1;
})(array1, k1);

console.log("IIFE");
console.log(result1);
