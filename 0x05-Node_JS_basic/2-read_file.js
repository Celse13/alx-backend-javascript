const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    // Split the file content by new line and filter out any empty lines
    const lines = data.split('\n').filter(Boolean);

    // Skip the header row and initialize an object to count students by field
    const studentsByField = {};

    for (let i = 1; i < lines.length; i++) {
      const [firstName, , field] = lines[i].split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    }

    // Total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Log the number of students and their names by field
    Object.entries(studentsByField).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });

  } catch (error) {
    // If the file cannot be read, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;