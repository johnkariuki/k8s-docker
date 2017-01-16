//Load supertest and the app instance.
const request = require('supertest');
const app = require('../index').app;

describe('Index Tests', () => {
    describe('GET /', () => {
        //Should return status code 200 with JSON message: welcome to root
        it('Should return root message', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect(JSON.stringify('welcome to root'))
                .end(done);
        });
    });
});