const students = [
  { name: "Bobby", hometown: "Pittsburgh", labsComplete: 801 },
  { name: "Sally", hometown: "New York", labsComplete: 398 },
  { name: "Sammy", hometown: "Pittsburgh", labsComplete: 550 },
  { name: "Annette", hometown: "Los Angeles", labsComplete: 896 },
  { name: "Joey", hometown: "Tampa Bay", labsComplete: 0 }
];

const totalLabsComplete = students => {
  return students.reduce((total, student) => {
    return total + student.labsComplete;
  }, 0);
};

const averageLabsComplete = students => {
  return totalLabsComplete(students) / students.length;
};

console.log(averageLabsComplete(students));
console.log("the log above this should say 529");
