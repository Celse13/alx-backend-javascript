const expressLib = require('express');
const fileSystem = require('fs').promises;

const app = expressLib();

async function countStudents(filePath) {
  try {
    const fileContent = await fileSystem.readFile(filePath, 'utf8');
    const records = fileContent.trim().split('\n');
    let totalStudents = 0;
    const departmentStudents = {};

    records.forEach((record, index) => {
      if (index > 0 && record) { // Skip header and empty lines
        totalStudents++;
        const [name, , , department] = record.split(',');
        if (!departmentStudents[department]) {
          departmentStudents[department] = [];
        }
        departmentStudents[department].push(name);
      }
    });

    let summary = `Number of students: ${totalStudents}\n`;
    Object.entries(departmentStudents).forEach(([dept, names]) => {
      summary += `Number of students in ${dept}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return summary;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(summary => {
      res.send(`This is the list of our students\n${summary}`);
    })
    .catch(err => {
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

const SERVER_PORT = 1245;
app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));

module.exports = app;
