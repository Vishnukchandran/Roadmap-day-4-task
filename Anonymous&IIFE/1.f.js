// 1.f.Return median of two sorted arrays of the same size.

//Anonymous
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

let findMedian = function (array1, array2) {
  let mergedarray = array1.concat(array2).sort((a, b) => a - b);
  let length = mergedarray.length;

  if (length % 2 === 0) {
    let mid = length / 2;
    return (mergedarray[mid - 1] + mergedarray[mid]) / 2;
  } else {
    return mergedarray[Math.floor(length / 2)];
  }
};
console.log("Anonymous function");
let median = findMedian(array1, array2);
console.log(median);

//IIFE
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

const median1 = (function (arr1, arr2) {
  let mergedarray = arr1.concat(arr2).sort((a, b) => a - b);
  let length = mergedarray.length;

  if (length % 2 === 0) {
    let mid = length / 2;
    return (mergedarray[mid - 1] + mergedarray[mid]) / 2;
  } else {
    return mergedarray[Math.floor(length / 2)];
  }
})(arr1, arr2);

console.log("IIFE");
console.log(median1);
