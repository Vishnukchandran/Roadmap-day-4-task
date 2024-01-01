// 2.a.Print odd numbers in an array

//Arrow function

console.log("Arrow function");
let Odd = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
  return array;
};

Odd([1, 21, 33, 45, 50, 66, 77, 92, 100]);
