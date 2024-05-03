const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    try {
      const data = await fs.readFile(dbPath, 'utf8');
      const lines = data.split('\n').filter(line => line);
      const students = lines.slice(1); // Remove header
      const csStudents = students.filter(student => student.split(',')[3] === 'CS');
      const sweStudents = students.filter(student => student.split(',')[3] === 'SWE');
      const responseText = `This is the list of our students\nNumber of students: ${students.length}\n` +
        `Number of students in CS: ${csStudents.length}. List: ${csStudents.map(s => s.split(',')[0]).join(', ')}\n` +
        `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(s => s.split(',')[0]).join(', ')}`;
      res.end(responseText);
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
