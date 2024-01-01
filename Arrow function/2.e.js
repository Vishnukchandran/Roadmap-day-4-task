// 2.e.Return all the palindromes in an array

//Arrow function

console.log("Arrow function");
const findPalindromes = (array) => {
  const palindromes = [];

  for (let word of array) {
    let reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
};

const myArray = ["madam", "tamil", "noon", "apple"];
const palindromeResults = findPalindromes(myArray);
console.log(palindromeResults);
