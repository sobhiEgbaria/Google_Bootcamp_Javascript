// the call stack

// promises
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("YAY WE GOT A DOG!!!!");
  })
  .catch(() => {
    console.log(":( NO DOG");
  });
