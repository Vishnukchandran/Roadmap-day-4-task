// 1.e.Return all the palindromes in an array

//Anonymous
console.log("Anonymous function");
const findPalindromes = function (array) {
  const palindromes = [];

  for (let word of array) {
    let reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      palindromes.push(word);
    }
  }
  return palindromes;
};

const myArray = ["racecar", "hello", "noon", "apple"];
const palindromeResults = findPalindromes(myArray);
console.log(palindromeResults);

//IIFE Function
console.log("IIFE");
const findPalindromes1 = (function (array1) {
  const palindromes1 = [];

  for (let word1 of array1) {
    let reversedWord1 = word1.split("").reverse().join("");
    if (word1 === reversedWord1) {
      palindromes1.push(word1);
    }
  }
  return palindromes1;
})(["madam", "tamil", "level", "orange"]);

const palindromeResults1 = findPalindromes1;
console.log(palindromeResults1);
