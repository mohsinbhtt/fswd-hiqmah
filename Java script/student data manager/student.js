const students = [
  {
    id: 101,
    name: 'Alice Johnson',
    scores: [78, 85, 92],
    address: { city: 'New York', zip: 10001 },
  },
  {
    id: 102,
    name: 'Bob Smith',
    scores: [95, 81],
    address: { city: 'Los Angeles' },
  },
  {
    id: 103,
    name: 'Charlie Brown',
    scores: [67, 73, 70, 80],
    address: null,
  },
];

const [alice] = students;
const [firstScore] = alice.scores;
const {
  address: { city: aliceCity },
} = alice;

console.log("Alice's first score:", firstScore);
console.log("Alice's city:", aliceCity);

const allScores = [
  ...students[0].scores,
  ...students[1].scores,
  ...students[2].scores,
];

console.log('All Scores:', allScores);

for (const student of students) {
  const zip = student.address?.zip ?? '00000';
  console.log(`${student.name}'s ZIP:`, zip);
}

const citySet = new Set();

for (const student of students) {
  const city = student.address?.city;
  if (city) {
    citySet.add(city);
  }
}

console.log('Unique Cities:', [...citySet]);

for (const student of students) {
  const highest = Math.max(...student.scores);
  console.log(`${student.name}'s Highest Score:`, highest);
}
