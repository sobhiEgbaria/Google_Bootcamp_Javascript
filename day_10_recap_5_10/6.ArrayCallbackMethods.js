// 1. forEach loop
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

for (const book of books) {
  console.log(book.title);
}

books.forEach((book, index) => {
  console.log(book.rating, `index: ${index}`);
});

// 2.map loop ==> return an new array form the old one>
const numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// array with obj of even numbers
let evenNum = numbers.map((number) => {
  return {
    num: number,
    isEven: number % 2 == 0,
  };
});

console.log(evenNum);

// 3."Regular" arrow function:

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
});

const doubles2 = nums.map((n) => {
  return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

const parityList = nums.map(function (n) {
  if (n % 2 === 0) return "even";
  return "odd";
});

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return "even";
  return "odd";
});
const parityList2 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// 4.find
const books1 = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
//Find first book w/ rating over 4.3
const goodBook = books1.find((b) => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = books1.find((b) => b.authors.includes("Neil Gaiman"));

// 5.reduce ==> multiple values of array to one single result
const nums1 = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = nums1.reduce((total, currentVal) => {
  return total * currentVal;
});

// To group books by rating:
const books3 = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
];

const groupedByRatings = books3.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
