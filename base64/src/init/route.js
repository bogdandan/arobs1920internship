const aboutController = require('../controllers/about');
const encodeController = require('../controllers/encode');
const decodeController = require('../controllers/decode');

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
   * @api {post} /encode Encode
   * @apiVersion 1.0.0
   * @apiName Encode
   * @apiGroup Encode
   * @apiDescription This route is used to encode text to base64.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request POST 'http://localhost:8080/encode' \
   --header 'Content-Type: text/plain' \
   --data-raw 'test'
   *
   * @apiSuccessExample {text} Success-Response:
   * dGVzdA==
   */
  app.post('/encode', encodeController.post);

  /**
   * @api {post} /decode Decode
   * @apiVersion 1.0.0
   * @apiName Decode
   * @apiGroup Decode
   * @apiDescription This route is used to decode base64 text to UTF-8.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request POST 'http://localhost:8080/decode' \
   --header 'Content-Type: text/plain' \
   --data-raw 'dGVzdA=='
   *
   * @apiSuccessExample {text} Success-Response:
   * test
   */
  app.post('/decode', decodeController.post);
};
