const request = require('supertest');
const app = require('../../app');

describe('about [controller]', () => {
    it('should return service information', async () => {
        await request(app)
            .get('/about')
            .send()
            .expect(200)
            .then(response => expect(response.text).toEqual('This app is use to encode to base64 and decode from bas64 a give text 1.0.0'))
    });
    
    it('should fail', () => {
        expect('true').toEqual(false);
    })
});
