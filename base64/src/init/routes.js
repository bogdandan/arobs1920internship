const encodeController = require('../controllers/encode');
const decodeController = require('../controllers/decode');
const aboutController = require('../controllers/about');

module.exports = (app) => {
    app.post('/encode', encodeController.post);
    app.post('/decode', decodeController.post);
    app.get('/about', aboutController.get);
};
