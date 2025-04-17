// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************

// const suits = ["hearts", "diamonds", "spades", "clubs"];
// const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

// // make a duck
// const makeDuck = () => {
//   let duck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   let arrayOfValues = values.split(",");

//   for (const suit of suits) {
//     for (const value of arrayOfValues) {
//       duck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return duck;
// };

// const myDuck = makeDuck();

// // draw a card
// const drawCard = (myDuck) => {
//   let card = myDuck.pop();
//   return card;
// };

// console.log(myDuck);

// console.log(drawCard(myDuck));
// console.log(drawCard(myDuck));

// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

const makeDuck2 = {
  duck: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  makeDuck() {
    let arrayOfValues = this.values.split(",");
    for (const suit of this.suits) {
      for (const value of arrayOfValues) {
        this.duck.push({
          value,
          suit,
        });
      }
    }
  },
  drawCard() {
    return this.duck.pop();
  },
  drawMutableCards(numOfCards) {
    let cards = [];
    for (let i = 0; i < numOfCards; i++) {
      cards.push(this.duck.pop());
    }

    return cards;
  },
};

console.log(makeDuck2.duck);
console.log(makeDuck2.makeDuck());
console.log(makeDuck2.duck);
console.log(makeDuck2.drawCard());
console.log(makeDuck2.drawMutableCards(4));
