const request = require('supertest');
const app = require('../app');

describe('[app]', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should return hello world', async () => {
    await request(app)
      .get('/')
      .set('Content-type', 'application/json')
      .send()
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello world');
      });
  });

  it('should return hello john with query params', async () => {
    await request(app)
      .get('/john?test=2&idk=asdDSA')
      .set('Content-type', 'application/json')
      .send()
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello john test:2 & idk:asdDSA');
      });
  });

  it('should return hello john with id', async () => {
    await request(app)
      .get('/john/5')
      .set('Content-type', 'application/json')
      .send()
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello john 5');
      });
  });

  it('should return hello and the body send at post', async () => {
    await request(app)
      .post('/john')
      .set('Content-type', 'application/json')
      .send({ test: 2, idk: 'asdDSA' })
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello john test:2 & idk:asdDSA');
      });
  });
});
