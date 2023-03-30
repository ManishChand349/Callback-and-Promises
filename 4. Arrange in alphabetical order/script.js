function bookTitles(books, callback) {
  const titles = books.map(book => book.title);
  titles.sort();
  callback(titles);
}

const books = [
  { title: "Yellowface", author: "R.F. Kuang", year: 2023 },
  { title: "Spare", author: "Prince Harry, Duke of Sussex", year: 2023 },
  { title: "Doglapan", author: "Ashneer Grover", year:  2022 },
  { title: "Homecoming", author: "Kate Morton", year: 2023 },
];

function logTitles(titles) {
  console.log("Book titles in alphabetical order:");
  titles.forEach(title => console.log(title));
}

bookTitles(books, logTitles);
