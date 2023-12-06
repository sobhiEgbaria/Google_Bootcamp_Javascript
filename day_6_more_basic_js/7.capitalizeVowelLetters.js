// capitalize function receive 1 word.
//the function return word that capitalize all vowel letters (a,e,i,o,u,y)

const capitalize = (word) => {
  let lettersInIPlace,
    newWord = "";

  for (let i = 0; i < word.length; i++) {
    lettersInIPlace = word[i];

    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u" ||
      word[i] == "y"
    )
      lettersInIPlace = lettersInIPlace.toUpperCase();

    newWord += lettersInIPlace;
  }
  return newWord;
};

console.log(capitalize("my name is sobhi"));
