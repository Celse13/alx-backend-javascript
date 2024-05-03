const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students).sort()) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      return res.status(200).send(response.trim());
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      if (!students[major]) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }
      return res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
