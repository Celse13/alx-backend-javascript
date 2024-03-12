export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city).map((student) => {
      const gradeObj = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      if (gradeObj[0]) {
        return {...student, grade: gradeObj[0].grade}
        }
        return { ...student, grade: gradeObj[0].grade };
    });
  }
