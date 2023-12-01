// divideOrHasSeven function receive 2 arguments: 'start' and 'end'.
//  The function return the amount of numbers that have one of:
//        1. have the number 7 in one of the digits.
//               2. the number divide by 7.

const divideOrHasSeven = (start, end) => {
  let counter = 0;

  for (let i = start; i <= end; i++) {
    let temp = i;
    if (temp % 7 == 0) counter++;
    else {
      while (temp > 0) {
        if (temp % 10 == 7) {
          counter++;
          break;
        }
        temp = Math.floor(temp / 10);
      }
    }
  }
  return counter;
};

console.log(divideOrHasSeven(5, 22));
