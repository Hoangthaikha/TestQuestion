const students = [
  { name: "Alice", grades: [85, 90] },
  { name: "Bob", grades: [75, 80, 88] },
  { name: "Charlie", grades: [95, 85, 90] },
];

function averageGradesOfStudents(s) {
  for (var i = 0; i < students.length; i++) {
    var totalGrades = students[i].grades.reduce(function (a, c) {
      return a + c;
    }, 0);

    console.log("-----------------------------");

    console.log("Total Grades: " + totalGrades);

    var avarage = totalGrades / students[i].grades.length;

    console.log(students[i].name + " AvarageGrades: " + avarage);

    var update = avarage;
    avarage = students[i].grades;
    students[i].grades = update;
  }
  //
  // var newStu = students.map(function (x) {
  //   x["avarageGrades"] = x["grades"];

  //   delete x["grades"];

  //   return x;
  // });

  console.log(newStu);
  //
  console.log("-----------------------------");

  return true;
}

console.log(averageGradesOfStudents(students));

// function gradesAvarage(s) {
//   var avarageGrades = students.map(function (x) {
//     var init = 0;
//     var sum = x.grades.reduce(function (a, c) {
//       //console.log(a, c);
//       return a + c;
//     }, init);

//     var avarage;

//     var countGrades = students.map(function(x){
//         return x.grades.length;
//     })

//     avarage = sum / countGrades

//     return {
//       name: x.name,
//       avarageGrades: avarage,
//     };
//   });
//   return avarageGrades;
// }

// console.log(gradesAvarage(students));
// gradesAvarage(students);

//   console.log(arrStudents);

//   if (arrStudents.length < 3 && arrStudents.length > 3) {
//     console.log("sai");
//     return students;
//   } else {
//     var avarageGrades = students.map(function (x) {
//       var init = 0;
//       var sum = x.grades.reduce(function (a, c) {
//         return a + c;
//       }, init);

//       var avarage = sum / 3;
//       return {
//         name: x.name,
//         avarageGrades: avarage,
//       };
//     },);
//     console.log(avarageGrades)
//   }
// }
// check();
