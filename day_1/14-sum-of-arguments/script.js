/*
 * Sum of Arguments
 * Create a function that sums all the arguments passed to it.
 */
function sumOfArguments(...args) {
  // ... spred to convert args to arry(list)
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// Usage: pass arguments
console.log("Sum:", sumOfArguments(10, 2, 8, 4, 6)); // 30
