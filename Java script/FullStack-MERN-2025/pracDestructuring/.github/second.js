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
  { id: 103, name: 'Charlie Brown', scores: [67, 73, 70, 80], address: null },];
 //Extract Alice’s first score and her city into variables using destructuring. 
 let { id, name, scores: [a], address: { city }, } = students[0]; let updateAlice = { id, sname, scores: [a], address: { city }, }; console.log(updateAlice);
  //Create a new array allScores containing all scores from all students using the spread operator. //
   const allScores = [ // ...students[0].scores, // ...students[1].scores, // ...students[2].scores, // ]; 
   // // console.log(allScores); let allScores = []; for (const e of students) { allScores.push(...e.scores); } console.log(allScores); //Write a function average(...nums) that uses the rest parameter to calculate an average of any number of scores. function average(...numbs) { // when we pass arguments it gets in form of array with rest operator including all values, we can also use (a,b,..numbs means that skips first2 values and calculates rest) if (numbs.length === 0) return 'empty array'; let sum = 0; for (let i = 0; i < numbs.length; i++) { sum += numbs[i]; } return sum / numbs.length; } console.log(average(10, 30, 40, 70)); console.log(average()); //Use ||, &&, and ?? to safely get each student’s ZIP code, falling back to "00000" if missing. //Access each student’s address.zip safely without throwing an error for (let i = 0; i < students.length; i++) { const zip = students[i].address?.zip ?? '00000'; console.log(${students[i].name}, ZIP: ${zip}); } //Make a Set of all unique cities where students live. // const cities = new Set([students[0].address.city, students[1].address.city]); // console.log(cities); const cities = new Set(); for (const student of students) { cities.add(student.address?.city); } console.log(cities); //Create a Map where the key is the student ID and the value is their average score. const stId = new Map(); for (const s of students) { //loops each student let sum = 0; for (const score of s.scores) { //calculates average of each student sum += score; } const avg = sum / s.scores.length; stId.set(s.id, avg); } console.log(stId); //Use a for...of loop to log each student’s highest score. for (const h of students) { let highScore = 0; for (const hs of h.scores) { if (hs > highScore) { highScore = hs; } } console.log(${h.name} highest Score is ${highScore}); } //Convert each student’s name to uppercase initials (e.g., "Alice Johnson" → "AJ"). for (let i = 0; i < students.length; i++) { //loop for each name const words = students[i].name.split(' '); //splits array in individual words like alice, johnson let initials = ''; //creates empty string for (let j = 0; j < words.length; j++) { //loops first letter of each word initials += words[j][0].toUpperCase(); //stores it in initials } console.log(initials); }]
