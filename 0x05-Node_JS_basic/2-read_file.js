const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).filter(line => line).map(line => {
    const [firstName, , field] = line.split(',');
    return { firstName, field };
  });

  console.log(`Number of students: ${students.length}`);

  const fields = [...new Set(students.map(student => student.field))];
  fields.forEach(field => {
    const studentsInField = students.filter(student => student.field === field);
    console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map(student => student.firstName).join(', ')}`);
  });
}

module.exports = countStudents;
