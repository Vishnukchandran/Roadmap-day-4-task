// 2.b.Convert all the strings to title caps in a string array

//Arrow function

console.log("Arrow function");
let array1 = (stringarray) => {
  const titlecaps = stringarray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(titlecaps);
};
array1(["are", "you", "going", "to", "dubai"]);
