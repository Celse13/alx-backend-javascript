const http = require('http');
const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then(fileContent => {
        const lines = fileContent.trim().split('\n');
        const studentInfo = {};
        let studentCount = 0;

        lines.forEach((line, index) => {
          if (index !== 0 && line.length > 0) {
            const data = line.split(',');
            const major = data[3];
            const name = data[0];
            studentInfo[major] = studentInfo[major] || [];
            studentInfo[major].push(name);
          }
        });

        studentCount = lines.length - 1;
        let output = `Number of students: ${studentCount}\n`;
        Object.keys(studentInfo).sort().forEach(key => {
          output += `Number of students in ${key}: ${studentInfo[key].length}. List: ${studentInfo[key].join(', ')}\n`;
        });

        resolve(output);
      })
      .catch(error => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then(info => {
        response.writeHead(200);
        response.end(`This is the list of our students\n${info}`);
      })
      .catch(err => {
        response.writeHead(404);
        response.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(1245);

module.exports = server;
