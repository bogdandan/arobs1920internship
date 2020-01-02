const aboutController = require('../controllers/about');
const loginController = require('../controllers/login');
const authenticateController = require('../controllers/authenticate');

module.exports = (app) => {
  app.get('/about', aboutController.get);
  app.post('/login', loginController.post);
  app.post('/authenticate', authenticateController.post);
};
