const request  = require('supertest');
const app = require('../lib/app');

describe('test app', () => {
    it('has a testin route', () => {
        return request(app)
            .get('/tester')
            .then(res => {
                expect(res.text).toEqual({ testing: 123 });
            });

    });
});


