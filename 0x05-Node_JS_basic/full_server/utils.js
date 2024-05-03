const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').slice(1); // Skip header line
    const students = lines.reduce((acc, line) => {
      const [firstName, field] = line.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstName);
      return acc;
    }, {});
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = { readDatabase };
