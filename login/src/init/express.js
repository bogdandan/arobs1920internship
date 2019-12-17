const express = require('express');

const config = require('../config');
const logger = require('../middleware/logger');

module.exports = (app) => {
    app.set('PORT', config.PORT);
    app.use(express.json());
    app.use(express.text());
    app.use(logger());
};
