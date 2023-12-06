const primeNumbers = (n) => {
  let isPrime = true,
    counter = 0;
  let primeNumbers = [];

  for (let i = 2; i <= n; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      counter++;
      primeNumbers.push(i);
    }
  }
  return `their are ${counter} primeNumbers: [${primeNumbers}] `;
};

console.log(primeNumbers(10));
