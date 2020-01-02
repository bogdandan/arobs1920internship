const aboutController = require('../controllers/about');
const loginController = require('../controllers/login');
const authenticateController = require('../controllers/authenticate');

module.exports = (app) => {
  /**
   * @api {get} /about Retrieve service info
   * @apiVersion 1.0.0
   * @apiName About
   * @apiGroup About
   * @apiDescription Retrieves the service's information.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request GET 'http://localhost:8080/about'
   *
   * @apiSuccess {String} description Service description.
   *
   */
  app.get('/about', aboutController.get);

  /**
   * @api {post} /login Login
   * @apiVersion 1.0.0
   * @apiName Login
   * @apiGroup Login
   * @apiDescription This route is used to retrieve token.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request POST 'http://localhost:8080/login' \
   --header 'Content-Type: application/json' \
   --data-raw '{
  	"username":"admin",
  	"password": "test"
  }'
   *
   * @apiSuccess {String}  token login token.
   * @apiSuccessExample {text} Success-Response:
   * 6588a460-2d0d-11ea-86ed-51b3b4f9f066
   */
  app.post('/login', loginController.post);

  /**
   * @api {post} /authenticate Authenticate request
   * @apiVersion 1.0.0
   * @apiName Authenticate Request
   * @apiGroup Authenticate
   * @apiDescription This route is used to authenticate a request.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request POST 'http://localhost:8080/authenticate' \
   --header 'Content-Type: application/json' \
   --header 'Authorization: Bearer 6588a460-2d0d-11ea-86ed-51b3b4f9f066'
   *
   * @apiSuccessExample {text} Success-Response:
   * Ok
   */
  app.post('/authenticate', authenticateController.post);
};
