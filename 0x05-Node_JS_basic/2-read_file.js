const fs = require('fs');

const countStudents = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const records = lines.map((line) => line.split(','));
    const studentData = records.slice(1, -1);

    const totalStudents = studentData.length;
    const csStudentNames = [];
    const sweStudentNames = [];

    for (const student of studentData) {
      if (student[3] === 'CS') {
        csStudentNames.push(student[0]);
      } else if (student[3] === 'SWE') {
        sweStudentNames.push(student[0]);
      }
    }

    console.log(`Total students: ${totalStudents}`);
    console.log(`CS students: ${csStudentNames.length}. Names: ${csStudentNames.join(', ')}`);
    console.log(`SWE students: ${sweStudentNames.length}. Names: ${sweStudentNames.join(', ')}`);
  } catch (error) {
    throw new Error('Failed to load the student data');
  }
};

module.exports = countStudents;
