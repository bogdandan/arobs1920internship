const express = require('express');

const app = express();

require('./init/express')(app);
require('./init/routes')(app);

module.exports = app;
