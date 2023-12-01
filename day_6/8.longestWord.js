const longestWord = (sentence) => {
  let wordsArray = sentence.split(" ");
  let maxLength = 0,
    pos = 0;
  var counter = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    counter = 0;
    for (let j = 0; j < wordsArray[i].length; j++) {
      if (/[a-zA-Z]/.test(wordsArray[i].charAt(j))) {
        counter++;
      }
    }

    if (counter > maxLength) {
      maxLength = counter;
      pos = i;
    }
  }
  wordsArray[pos] = wordsArray[pos].replace(/[0-9]/g, "");

  return wordsArray[pos];
};

console.log(longestWord("my name is sobhi "));
