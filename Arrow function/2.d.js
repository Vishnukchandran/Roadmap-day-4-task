// 2.d.Return all the prime numbers in an array

// Arrow function

console.log("Arrow function");
let findPrimes = (array) => {
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