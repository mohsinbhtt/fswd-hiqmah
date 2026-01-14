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

const [stud1, stud2, stud3] = students; // destructuring array containing 3 objects
console.log(stud1);

const stud1Data = Object.entries(stud1); // will get data of student1 in array of arrays
console.log(stud1Data);
console.log(stud1Data[3]); // at index 4 address object is present

const [key, { city, zip }] = stud1Data[3];
console.log(city); // getting city from address object

console.log(stud1.scores);
console.log(stud2.scores);
console.log(stud3.scores);

//   const studFirstMarks = stud1.scores
//   const studSecMarks = stud2.scores
//   const studThirdMarks = stud3.scores

//   const totalMarks= [studFirstMarks,studSecMarks,studThirdMarks]
//   console.log(`totalMarks = ${totalMarks}`)
// const stud2Data = Object.entries(stud2);
// const stud3Data = Object.entries(stud3);

const totalMarks = [...stud1.scores, ...stud2.scores, ...stud3.scores];
console.log(totalMarks);

// obtaining avg using rest parameter
function average(...nums) {
  if (nums.length === 0) return 'empty array';
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}
avgStud1 = average(...stud1.scores);
avgStud2 = average(...stud2.scores);
avgStud3 = average(...stud3.scores);
console.log(avgStud1, avgStud2, avgStud3);

// getting zip code using ?? operator
for (const student of students) {
  const zip = student.address?.zip ?? '00000';
  console.log(`${student.name}, ZIP: ${zip}`);
}
// another way by using || operator - it will return 77545 for all falsy values
for (const student of students) {
  let stuZip = student.address?.zip || 77545;
  console.log(`${student.name} : ${stuZip}`);
}

// Make a Set of all unique cities where students live.
let stuCities = new Set();
for (const student of students) {
  student.address?.city && stuCities.add(student.address.city);
}
console.log(stuCities);

// Create a Map where the key is the student ID and the value is their average score.
let stuMap = new Map();
for (const student of students) {
  stuMap.set(student.id, average(...student.scores));
}
console.log(stuMap);

// finding highest average score
Object.assign(stud1, { average: avgStud1 });
Object.assign(stud2, { average: avgStud2 });
Object.assign(stud3, { average: avgStud3 });
const Averages = [stud1.average, stud2.average, stud3.average];

for (const avg of Averages) {
  let highestAvg = 0;
  if (avg > highestAvg) {
    highestAvg = avg;
  }
  console.log(`Highest average is ${highestAvg}`);
}

// Use a for...of loop to log each student’s highest score.
for (const student of students) {
  let highScore = 0;
  for (const score of student.scores) {
    if (highScore < score) {
      highScore = score;
    }
  }
  console.log(`${student.name} highest score is ${highScore}`);
}
