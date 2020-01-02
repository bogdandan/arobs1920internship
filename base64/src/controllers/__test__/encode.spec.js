const request = require('supertest');
const app = require('../../app');

describe('encode [controller]', () => {
  it('should encode string from base64', async () => {
    await request(app)
      .post('/encode')
      .set('Content-Type', 'text/plain')
      .send('hello world')
      .expect(200)
      .then((response) => expect(response.text).toEqual('aGVsbG8gd29ybGQ='));
  });

  it('should return 400 bad request if no text is provided', async () => {
    await request(app)
      .post('/encode')
      .set('Content-Type', 'text/plain')
      .send()
      .expect(400)
      .then((response) => expect(response.text).toEqual('Bad Request'));
  });

  it('should return 400 bad request if no text has length 0', async () => {
    await request(app)
      .post('/encode')
      .set('Content-Type', 'text/plain')
      .send('')
      .expect(400)
      .then((response) => expect(response.text).toEqual('Bad Request'));
  });
});
