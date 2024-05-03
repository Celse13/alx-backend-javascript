const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
