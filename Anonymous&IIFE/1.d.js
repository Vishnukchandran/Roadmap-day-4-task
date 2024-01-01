//1.d.Return all the prime numbers in an array

//Anonymous
console.log("Anonymous function");
let findPrimes = function (array) {
  const primes = [];

  for (let num of array) {
    if (num > 1) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
    }
  }

  return primes;
};
const myArray = [2, 4, 6, 9, 11, 13, 17, 20];
const primeNumbers = findPrimes(myArray);
console.log(primeNumbers);

//IIFE
console.log("IIFE");
const myArray1 = [2, 4, 6, 9, 11, 13, 17, 20];
const primeNumbers1 = (function (array1) {
  const primes1 = [];

  for (let num1 of array1) {
    if (num1 > 1) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes1.push(num1);
      }
    }
  }

  return primes1;
})(myArray1);
console.log(primeNumbers1);
