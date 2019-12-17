const nock = require('nock');
const request = require('supertest');
const app = require('../../app');
const config = require('../../config');
const tokenRegistry = require('../../utils/tokenRegistry');

jest.mock('uuid', () => ({
    v1: () => "random text"
}));

describe('login [controller]', () => {
    afterEach(tokenRegistry.clean);

    it('should return token if the username and password are correct', async () => {
        nock(config.BASE64_URL)
            .post('/encode')
            .reply(200, "dGVzdA==");

        await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({username: "admin", password: "test"})
            .expect(200)
            .then(response => expect(response.text).toEqual("random text"))
    });

    it('should return bad request if username is missing', async () => {
        await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({password: "dGVzdA=="})
            .expect(400)
            .then(response => expect(response.text).toEqual("Bad request"))
    });

    it('should return bad request if password is missing', async () => {
        await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({username: "admin",})
            .expect(400)
            .then(response => expect(response.text).toEqual("Bad request"))
    });

    it('should return bad request if username is not admin', async () => {
        await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({username: "test", password: 'dGVzdA=='})
            .expect(400)
            .then(response => expect(response.text).toEqual("Bad request"))
    });

    it('should return bad request if password is not dGVzdA==', async () => {
        nock(config.BASE64_URL)
            .post('/encode')
            .reply(200, "test");

        await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({username: "admin", password: 'test'})
            .expect(400)
            .then(response => expect(response.text).toEqual("Bad request"))
    });
});
