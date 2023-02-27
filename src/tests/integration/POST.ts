let request = require('supertest');
require('dotenv').config();
import {
    testData
} from "./testData";

const preRequest = request('https://' + process.env.AUTH0_BASE_URL);
request = request('http://localhost:3001');
let token = null;

/*
 * This method retrieves access token for Dev environment and stores it in a local variable
 */
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

/*
 * This method deletes all items in the database before each test
 */
beforeEach (function (done) {
    request
        .delete('/api/v1/user/activeGames')
        .send()
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
        });
})

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
                    }
                })
                .expect(201, [testData.activePuzzle1Response])
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post ActivePuzzle1 and ActivePuzzle2 returns 200 and expected response', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1, testData.activePuzzle2])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect(function(res) {
                    if (res.body[0] != undefined){
                        res.body[0]._id = "ID";

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
        it('Post no body returns 400 error message', function (done) {
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

        it('Post empty user id field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.userIDBlank])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post no user id field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.userIDNotPresent])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post user id is integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.userIDIsInt])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post empty puzzle field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleBlank])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post no puzzle field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleNotPresent])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle too long returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleIsTooLong])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle too short returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleIsTooShort])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle invalid character returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleHasInvalidCharacter])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post currentTime is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.currentTimeIsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleCurrentStateIsTooLong])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleCurrentStateIsTooShort])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.puzzleCurrentStateHasInvalidCharacter])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, testData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post duplicate activePuzzle returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([testData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .end(function(err, res) {
                });
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
