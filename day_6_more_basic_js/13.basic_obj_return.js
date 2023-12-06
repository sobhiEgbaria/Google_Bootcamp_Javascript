const books = {

    bookName: `back book`,
    author: `gogo`,
    year: 1991,
    numOfPges: 5755,
}

function books_details(books) {
    return `The book: ${books.bookName}
     was written by: ${books.author}
     in the year: ${books.year}
     num of pages: ${books.numOfPges}`
}

console.log(books_details(books));

