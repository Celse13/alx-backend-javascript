const httpLib = require('http');

const countStudents = require('./3-read_file_async');

const filePath = process.argv[2];

const server = httpLib.createServer(async (request, response) => {
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    return response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const stuList = await countStudents(filePath);
      return response.end(`${stuList.join('\n')}`);
    } catch (e) {
      response.end(e.message);
    }
  }
  return response.end();
});

server.listen(1245);

module.exports = server;
