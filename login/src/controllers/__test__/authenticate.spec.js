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

    it('should return 200 OK if the token is valid', async () => {
        nock(config.BASE64_URL)
            .post('/encode')
            .reply(200, "dGVzdA==");

        const token = await request(app)
            .post('/login')
            .set("Content-Type", "application/json")
            .send({username: "admin", password: "test"})
            .expect(200)
            .then(response => response.text);

        await request(app)
            .post('/authenticate')
            .set('Authorization', `Bearer ${token}`)
            .send()
            .expect(200)
            .then(response => expect(response.text).toEqual('Ok'));
    });

    it('should return 401 Unauthorized if the token is not valid', async () => {
        const token = 'test';

        await request(app)
            .post('/authenticate')
            .set('Authorization', `Bearer ${token}`)
            .send()
            .expect(401)
            .then(response => expect(response.text).toEqual('Unauthorized'));
    });

    it('should return 401 Unauthorized if the authorization header is missing', async () => {
        const token = 'test';

        await request(app)
            .post('/authenticate')
            .send()
            .expect(401)
            .then(response => expect(response.text).toEqual('Unauthorized'));
    });

    it('should return 401 Unauthorized if the authorization header does not start with Bearer', async () => {
        const token = 'test';

        await request(app)
            .post('/authenticate')
            .set('Authorization', `sdBearer ${token}`)
            .send()
            .expect(401)
            .then(response => expect(response.text).toEqual('Unauthorized'));
    });
});
