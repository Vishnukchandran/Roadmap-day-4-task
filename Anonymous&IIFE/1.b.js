//1.b.Convert all the strings to title caps in a string array

//Anonymous
console.log("Anonymous function");
let array1 = function (stringarray) {
  const titlecaps = stringarray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(titlecaps);
};
array1(["are", "you", "going", "to", "dubai"]);

//IIFE
console.log("IIFE");
let array2 = (function (stringarray) {
  const titlecaps = stringarray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(titlecaps);
})(["have", "you", "taken", "test"]);
