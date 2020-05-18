const request = require('supertest');

const app = require('../app.js');

describe('chat test api', function () {
    before(function () {
        console.log('before hook');
    });
    describe('GET /api', function () {
        it('return json response', function () {
            return request(app).get('/api').expect(200).expect('Content-Type', /json/);
        });
    });
    describe('POST /api', function () {
        it('return json response', function () {
            return request(app)
                .post('/api')
                .send({
                    type: 'text',
                    q: '뭐해?',
                    a: '일해',
                })
                .expect(200)
                .expect('Content-Type', /json/);
        });
    });

    describe('PUT /api', function () {
        it('return json response', function () {
            return request(app)
                .put('/api')
                .send({
                    type: 'text',
                    q: '뭐해?',
                    a: '일하지',
                })
                .expect(200)
                .expect('Content-Type', /json/);
        });
    });

    describe('POST /api', function () {
        it('return json response', function () {
            return request(app)
                .post('/api')
                .send({
                    type: 'text',
                    q: '1',
                    a: '1',
                })
                .expect(200)
                .expect('Content-Type', /json/);
        });
    });

    describe('DELETE /api', function () {
        it('return json response', function () {
            return request(app)
                .delete('/api')
                .send({
                    type: 'text',
                    q: '1',
                })
                .expect(200)
                .expect('Content-Type', /json/);
        });
    });

    describe('DELETE /api/chat', function () {
        it('return json response', function () {
            return request(app)
                .post('/api/chat')
                .send({
                    type: 'text',
                    message: '뭐해?',
                })
                .expect(200)
                .expect('Content-Type', /json/);
        });
    });
});
