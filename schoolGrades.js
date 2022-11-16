function makeSschollgrades(input) {
  let schoolGrades = {};
  let demo = [];
  let averageGrade = 0;
  for (const line of input) {
    let arrLine = line.split(" ");
    let name = arrLine.shift()
    let grades = 0
    for (const grade of arrLine) {
       grades += Number(grade)
    }
    averageGrade = grades / arrLine.length
   // let name = arrLine[0];
    // let gradeone = Number(arrLine[1]);
    // let gradetwo = Number(arrLine[2]);
    // let gradethree = Number(arrLine[3]);
    // let gradefour = Number(arrLine[4]);
    // if (gradefour > 0) {
    //   averageGrade = Number(gradeone + gradetwo + gradethree + gradefour) / 4;
    // } else if (gradethree > 0) {
    //   averageGrade = Number(gradeone + gradetwo + gradethree) / 3;
    // } else if (gradetwo > 0) {
    //   averageGrade = Number(gradeone + gradetwo) / 2;
    // }
    if (!demo.includes(name)) {
      demo.push(name);
      schoolGrades[name] = Number(averageGrade.toFixed(2));
    } else {
      schoolGrades[name] = ((schoolGrades[name] + averageGrade) / 2).toFixed(2);
    }
  }
  let sortInput = Object.entries(schoolGrades);
  sortInput.sort();

  for (const line of sortInput) {
    let [name, grade] = line;
    grade = Number(grade)
    console.log(`${name}: ${(grade.toFixed(2))}`);
  }
}

makeSschollgrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
