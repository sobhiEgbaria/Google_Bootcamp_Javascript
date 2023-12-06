/*
  FizzBuzz
  Write a program that prints the numbers from 1 to 100.
  But for multiples of three print “Fizz” instead of the number
  and for the multiples of five print “Buzz”.
  For numbers which are multiples of both three and five print “FizzBuzz”.
 */
function isfizzBuzz(arg) {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz_BUzz");
    } else if (i % 5 == 0) {
      console.log("BUzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

isfizzBuzz(100);

// // Usage example:
// let checkFizzBuzz1 = isfizzBuzz("one");
// console.log(checkFizzBuzz1); // should print 'Please enter a number'

// let checkFizzBuzz2 = isfizzBuzz(true);
// console.log(checkFizzBuzz2); // should print 'Please enter a number'

// let checkFizzBuzz3 = isfizzBuzz(9);
// console.log(checkFizzBuzz3); // should print 'Fizz'

// let checkFizzBuzz4 = isfizzBuzz(10);
// console.log(checkFizzBuzz4); // should print 'Buzz'

// let checkFizzBuzz5 = isfizzBuzz(30);
// console.log(checkFizzBuzz5); // should print 'FizzBuzz'

// let checkFizzBuzz6 = isfizzBuzz(11);
// console.log(checkFizzBuzz6); // should print 11
