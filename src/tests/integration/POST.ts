let request = require('supertest');
require('dotenv').config();
import {
    testData
} from "./testData";

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

    // request
    //     .delete('/api/v1/user/activeGames')
});

describe('Test POST requests for /api/v1/user/activeGames', function () {
    describe('Test code 200 POST requests', function () {
        it('Post ActivePuzzle1 returns 200 and expected response', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(function(res) {
                    if (res.body[0] != undefined){
                        res.body[0]._id = "ID";
                        res.body[0].moves[0]._id = "ID";
                    }
                })
                .expect(201, [testData.activePuzzle1Response])
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        // todo fix add numWrongCellsPlayedPerStrategy
        it('Post ActivePuzzle1 and ActivePuzzle2 returns 200 and expected response', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1, testData.activePuzzle2])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect(function(res) {
                    if (res.body[0] != undefined){
                        res.body[0]._id = "ID";
                        res.body[0].moves[0]._id = "ID";

                        res.body[1]._id = "ID";
                        res.body[1].moves[0]._id = "ID";
                        res.body[1].moves[1]._id = "ID";
                    }
                })
                .expect('Content-Type', /json/)
                .expect(201, [testData.activePuzzle1Response, testData.activePuzzle2Response])
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });

    describe('Test code 400 POST requests', function () {
        it('Post empty body returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        // todo fix, disallow duplicate puzzles
        it('Post duplicate activePuzzle returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
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
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, testData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post invalid Auth header returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, testData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        // todo wait 2 hours for token to expire
        it('Post expired Auth token returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + testData.expiredAccessToken)
                .expect('Content-Type', /json/)
                .expect(401, testData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });
});
