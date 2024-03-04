export default function createIteratorObject(report) {
  let employees = [];
  for (const val of Object.values(report.allEmployees)) {
    employees = [...employees, ...val];
  }

  return employees;
}
