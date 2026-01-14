const studentList = [];
const student1 = {
  studentName: 'Aslam',
  Marks: [55, 66, 65, 34, 66, 77],
  isPassed: true,
};
const student2 = {
  studentName: 'Farooq',
  Marks: [55, 64, 25, 78, 98, 77],
  isPassed: true,
};
const student3 = {
  studentName: 'Danish',
  Marks: [55, 66, 95, 94, 96, 77],
  isPassed: true,
};
const student4 = {
  studentName: 'Javid',
  Marks: [53, 56, 55, 34, 56, 77],
  isPassed: true,
};
const student5 = {
  studentName: 'Furqan',
  Marks: [25, 66, 65, 54, 56, 57],
  isPassed: true,
};
const student6 = {
  studentName: 'Ahsan',
  Marks: [55, 60, 69, 34, 66, 97],
  isPassed: true,
};
const student7 = {
  studentName: 'Aslam',
  Marks: [50, 60, 60, 30, 60, 70],
  isPassed: true,
};

studentList.push(
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7
);
// console.log(studentList);

for (i = 0; i <= studentList.length - 1; i++) {
  totalMarks = 0;
  for (j = 0; j <= studentList[i].Marks.length - 1; j++) {
    totalMarks += studentList[i].Marks[j];
    // console.log(totalMarks);
  }
  Average = totalMarks / 6; // Average marks of each student - of 6 subjects
  console.log(`The Average of ${studentList[i].studentName} is ${Average}`);
}
// studentList.obj.push(Average);
//TODO: Pehle average ko har object mein as key value pair add karo

for (i = 0; i < studentList.length; i++) {
  if (studentList.Average >= 40) {
    isPassed = true;
    console.log(`${studentName} is pass`);
  } else {
    isPassed = false;
    console.log(`${studentName} is fail`);
  }
}
for (i = 0; i < studentList.length; i++) {
  if (isPassed !== true) {
    continue;
  } else {
    console.log(studentList.studentName);
  }
}
