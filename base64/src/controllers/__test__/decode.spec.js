const request = require('supertest');
const app = require('../../app');

describe('decode [controller]', () => {
    it('should decode string from base64', async () => {
        await request(app)
            .post('/decode')
            .set("Content-Type", "text/plain")
            .send("aGVsbG8gd29ybGQ=")
            .expect(200)
            .then(response => expect(response.text).toEqual('hello world'))
    });

    it('should return 400 bad request if no text is provided', async () => {
        await request(app)
            .post('/decode')
            .set("Content-Type", "text/plain")
            .send()
            .expect(400)
            .then(response => expect(response.text).toEqual('Bad Request'))
    });

    it('should return 400 bad request if no text has length 0', async () => {
        await request(app)
            .post('/decode')
            .set("Content-Type", "text/plain")
            .send('')
            .expect(400)
            .then(response => expect(response.text).toEqual('Bad Request'))
    })
});
