// find all prime numbers from array 

const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
// Array(20).keys() generates numbers from 0 to 19.

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13, 17, 19]