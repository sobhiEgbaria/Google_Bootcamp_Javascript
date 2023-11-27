const MARKSARRAY = [55, 85, 55, 65];

/*
  the function calculateAverage() takes an array of marks as an argument
  and returns the average of the marks in the array.
 */
function calculateAverage(currentArray) {
  let sum = 0;
  for (let i = 0; i < currentArray.length; i++) {
    sum += currentArray[i];
  }
  avg = sum / currentArray.length;
  return avg;
}

// console.log(calculateAverage(MARKSARRAY));
/*
  the function calculateGrades() takes an array of marks as an argument
  and returns the grade of the student based on the average of the marks
  in the array.
  The grade is calculated as follows:
  - average < 70 = 'D'
  - average < 80 = 'C'
  - average < 90 = 'B'
  - average <= 100 = 'A'
 */
function calculateGrades(_currentArray) {
  let avg = calculateAverage(_currentArray);

  if (avg < 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  } else if (avg < 90) {
    return "B";
  } else if (avg <= 100) {
    return "A";
  }
}

console.log("Grade:", calculateGrades(MARKSARRAY)); // should return 'C'
