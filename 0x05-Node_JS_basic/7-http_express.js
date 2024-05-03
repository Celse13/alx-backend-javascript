// Import necessary modules
const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();

// Function to read and process the CSV file
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1); // Exclude header
    const csStudents = students.filter(student => student.split(',')[3] === 'CS');
    const sweStudents = students.filter(student => student.split(',')[3] === 'SWE');

    return `This is the list of our students\nNumber of students: ${students.length}\n` +
           `Number of students in CS: ${csStudents.length}. List: ${csStudents.map(s => s.split(',')[0]).join(', ')}\n` +
           `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(s => s.split(',')[0]).join(', ')}`;
  } catch (error) {
    console.error(error);
    return 'Failed to read the database file';
  }
}

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get the database file path from command line arguments
  const response = await countStudents(filePath);
  res.send(response);
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
