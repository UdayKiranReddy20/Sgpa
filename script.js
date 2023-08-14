function calculateSGPA() {
  const gradeInputs = document.getElementsByClassName("grade-input");
  const creditInputs = document.getElementsByClassName("credit-input");
  
  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < gradeInputs.length; i++) {
    const grade = gradeInputs[i].value.toUpperCase();
    const credit = parseFloat(creditInputs[i].value);

    if (!isNaN(credit) && (grade === "S" || grade === "A" || grade === "B" || grade === "C" || grade === "D" || grade === "RA"|| grade === "AB"|| grade === "NE")) {
      const gradePoint = getGradePoint(grade);
      totalGradePoints += gradePoint * credit;
      totalCredits += credit;
    }
  }

  const sgpa = totalGradePoints / totalCredits;
  
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your SGPA is: " + sgpa.toFixed(2);
}

function getGradePoint(grade) {
  switch (grade) {
    case "S": return 10;
    case "A": return 9;
    case "B": return 8;
    case "C": return 7;
    case "D": return 6;
    case "RA": return 0;
    case "AB": return 0;
    case "NE": return 0;
    default: return 0;
  }
}
