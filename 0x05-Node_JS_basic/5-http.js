const httpLib = require('http');
const fsLib = require('fs').promises;

async function countStudents(filePath) {
  try {
    const content = await fsLib.readFile(filePath, 'utf8');
    const rows = content.trim().split('\n');
    const studentInfo = {};
    let totalStudents = 0;
    let output = '';
    rows.forEach((row, index) => {
      if (row && index > 0) { // Skip header
        const [name, , , dept] = row.split(',');
        if (!studentInfo[dept]) studentInfo[dept] = [];
        studentInfo[dept].push(name);
        totalStudents++;
      }
    });
    output += `Number of students: ${totalStudents}\n`;
    Object.entries(studentInfo).forEach(([dept, names]) => {
      output += `Number of students in ${dept}: ${names.length}. List: ${names.join(', ')}\n`;
    });
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const server = httpLib.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then(report => {
        response.writeHead(200);
        response.end(`This is the list of our students\n${report}`);
      })
      .catch(error => {
        response.writeHead(404);
        response.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(1245);

module.exports = server;
