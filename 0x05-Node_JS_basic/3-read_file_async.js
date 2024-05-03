const fs = require('fs');

const countStudents = async (p) => {
  try {
    const d = await fs.promises.readFile(p, 'utf8');
    const r = d.split('\n');
    const c = r.map(row => row.split(','));
    const dt = c.slice(1, -1);

    const n = dt.length;
    const cs = [];
    const swe = [];

    for (const row of dt) {
      if (row[3] === 'CS') {
        cs.push(row[0]);
      } else if (row[3] === 'SWE') {
        swe.push(row[0]);
      }
    }
    console.log(`Number of students: ${n}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
