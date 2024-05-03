const httpModule = require('http');

const fetchStudentData = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = httpModule.createServer(async (request, response) => {
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const studentInfo = await fetchStudentData(databasePath);
      response.end(`${studentInfo.join('\n')}`);
    } catch (error) {
      response.end(error.message);
    }
  } else {
    response.end();
  }
});

app.listen(1245);

module.exports = app;
