/*
  Write a function that takes a number and displays all the prime
  numbers from 2 to that number.
 */
function showPrimeNumbers(numberLimit) {
  let list_primes_numbers = [];

  for (let i = 2; i < numberLimit; i++) {
    let is_prime_number = isPrimeNumber(i);
    if (is_prime_number == true) {
      list_primes_numbers.push(i);
    }
  }

  return list_primes_numbers;
}

/*
  Write a function that takes a number and returns true if the number
  is prime, false otherwise.
 */
function isPrimeNumber(_number) {
  for (let i = 2; i < _number; i++) {
    if (_number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(showPrimeNumbers(20)); // 2, 3, 5, 7, 11, 13, 17, 19
// console.log(isPrimeNumber(20));
