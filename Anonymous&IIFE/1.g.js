// 1.g.Remove duplicates from an array

//Anonymous
let array = [1, 2, 2, 3, 4, 4, 5, 5, 5];

let removeDuplicates = function (array) {
  let uniqueArray = [];
  array.forEach(function (item) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
};
console.log("Anonymous function");
let result = removeDuplicates(array);
console.log(result);

//IIFE
let array1 = [11, 12, 12, 13, 14, 14, 15, 15, 16];

const result1 = (function (array1) {
  let uniqueArray = [];
  array1.forEach(function (item) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
})(array1);

console.log("IIFE");
console.log(result1);
