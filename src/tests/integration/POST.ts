let request = require('supertest');
require('dotenv').config();
import {ErrorMessage400, ErrorMessage401} from "./testData";

const preRequest = request('https://' + process.env.AUTH0_BASE_URL);
request = request('http://localhost:3001');
let token = null;

before(function (done) {
    preRequest
        .post('/oauth/token')
        .send('grant_type=password&username=' + process.env.AUTH0_USERNAME + '&password=' + process.env.AUTH0_PASSWORD
            + '&client_id=' + process.env.AUTH0_CLIENT_ID + '&client_secret=' + process.env.AUTH0_CLIENT_SECRET +
            '&audience=' + process.env.AUTH0_AUDIENCE + '&scope=' + process.env.AUTH0_SCOPE + '&ContentType=application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .expect(function(res) {
            token = res.body.access_token;
        })
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
});

describe('Test POST requests for /api/v1/user/activeGames', function () {
    describe('Test code 400 POST requests', function () {
        it('Post empty body returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });

    describe('Test code 401 POST requests', function () {
        it('Post no Auth header returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post invalid Auth header returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        // todo
        it('Post expired Auth header returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });
});
