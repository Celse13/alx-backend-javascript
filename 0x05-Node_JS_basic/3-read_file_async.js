const fs = require('fs').promises;

const countStudents = (path) => {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      if (!data) throw new Error('Cannot load the database');

      const lines = data.split('\n').filter((line) => line !== '');
      const students = lines.slice(1);
      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fields = {};
      students.forEach((student) => {
        const [firstname,, , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

module.exports = countStudents;