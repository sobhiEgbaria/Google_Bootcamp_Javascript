const shortestWord = (sentence) => {
  let wordsArry = sentence.split(" ");

  let minLength = wordsArry[0];
  for (let i = 1; i < wordsArry.length; i++) {
    if (wordsArry[i].length < minLength.length) {
      minLength = wordsArry[i];
    }
  }
  return minLength;
};

console.log(shortestWord("himy name is sobhi"));
