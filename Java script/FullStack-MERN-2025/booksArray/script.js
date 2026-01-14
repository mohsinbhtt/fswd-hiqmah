const bookList = [
  {
    bookName: 'Untold story of Kumar',
    Author: 'Mohsin',
    publishYear: 2000,
    Available: true,
  },
  {
    bookName: 'Rich dad and poor dad',
    Author: 'Robert Singh',
    publishYear: 2009,
    Available: false,
  },
  {
    bookName: 'Mindset',
    Author: 'John Cena',
    publishYear: 2007,
    Available: false,
  },
  {
    bookName: 'Legends of Gulam Dar',
    Author: 'Salman Khan',
    publishYear: 2007,
    Available: true,
  },
  {
    bookName: 'Beautiful Kashmir',
    Author: 'Faisal',
    publishYear: 2012,
    Available: true,
    borrowed: 'yes',
  },
];

const newBook = {
  bookName: 'Freedom Fighters',
  Author: 'Sarwar',
  publishYear: 2017,
  Available: true,
};

bookList.push(newBook);
console.log(bookList);

// const book1 = bookList[0]
// const book2 = bookList[1]
// const book3 = bookList[2]
// const book4 = bookList[3]
// const book5 = bookList[4]
// const book6 = bookList[5]

let nameSearch = prompt('Enter your Author').trim().toLowerCase();
for (i = 0; i <= 5; i++) {
  if (bookList[i].Author.toLowerCase() === nameSearch) {
    console.log(bookList[i].bookName);
  }
}

for (i = 0; i <= 5; i++) {
  if (bookList[i].borrowed === 'yes') {
    bookList[i].Available = false;
  }
}
for (i = 0; i <= 5; i++) {
  if (bookList[i].Available !== true) {
    continue;
  } else console.log(`${bookList[i].bookName} : Is available`);
}
// BUG:
//TODO:
//FIXME:
