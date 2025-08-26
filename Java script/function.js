//TODO:
//FIXME:
//BUG:
const library = [
  {
    title: 'The Silent Sea',
    author: 'Clive Cus',
    year: 2010,
    available: true,
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    year: 2021,
    available: true,
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    year: 2014,
    available: false,
  },

  {
    title: 'Becoming',
    author: 'Michelle Obama',
    year: 2018,
    available: true,
  },

  {
    title: 'Educated',
    author: 'Tara West',
    year: 2018,
    available: true,
  },
];

console.log('📚 Initial Library:', library);

library.push({
  title: 'Atomic Habits',
  author: 'James Clear',
  year: 2018,
  available: true,
});
console.log('\n✅ After Adding a Book:', library);

for (i = 0; i <= 5; i++) {
  if (library[i].available !== true) {
    continue;
  }
}
