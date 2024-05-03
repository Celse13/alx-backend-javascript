const httpMod = require('http');
const fsMod = require('fs').promises;

function countStudents(dbPath) {
  return fsMod.readFile(dbPath, 'utf8')
    .then(data => {
      const records = data.trim().split('\n').slice(1); // Skip header and remove empty lines
      const stats = records.reduce((acc, curr) => {
        const [name, , , field] = curr.split(',');
        acc.total++;
        if (!acc[field]) acc[field] = { count: 0, names: [] };
        acc[field].count++;
        acc[field].names.push(name);
        return acc;
      }, { total: 0 });

      let report = `Number of students: ${stats.total}\n`;
      Object.keys(stats).forEach(key => {
        if (key !== 'total') {
          report += `Number of students in ${key}: ${stats[key].count}. List: ${stats[key].names.join(', ')}\n`;
        }
      });

      return report;
    })
    .catch(err => {
      throw new Error('Cannot load the database');
    });
}

const server = httpMod.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];
    countStudents(dbFile)
      .then(report => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${report}`);
      })
      .catch(error => {
        res.writeHead(500);
        res.end(error.message);
      });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(1245);

module.exports = server;
