const request = require('request-promise-native');
const uuid = require('uuid').v1;
const config = require('../config');
const tokenRegistry = require('../utils/tokenRegistry');

exports.post = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || username !== 'admin') return res.status(400).send('Bad request');

  const options = {
    url: `${config.BASE64_URL}/encode`,
    method: 'POST',
    headers: {
      'Content-type': 'text/plain',
    },
    body: password,
    resolveWithFullResponse: true,
  };

  const encodedPassword = (await request(options)).body;

  if (encodedPassword !== 'dGVzdA==') return res.status(400).send('Bad request');

  const token = uuid();

  // TODO: tokenMiddleware to store the token on response
  tokenRegistry.add(token);

  return res.status(200).send(token);
};
