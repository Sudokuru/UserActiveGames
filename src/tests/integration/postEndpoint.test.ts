let request = require('supertest');
require('dotenv').config();
import { token } from "./data/globalHooks.test";
import { postTestData } from "./data/postTestData.test";
import { globalTestData} from "./data/globalTestData.test";

request = request('http://localhost:3001');

describe('Test POST requests for /api/v1/user/activeGames', function () {
    describe('Test code 200 POST requests', function () {
        it('Post ActivePuzzle1 returns 200 and expected response', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(function(res) {
                    if (res.body[0] != undefined){
                        res.body[0]._id = "ID";
                    }
                })
                .expect(201, [postTestData.activePuzzle1Response])
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post ActivePuzzle1 and ActivePuzzle2 returns 200 and expected response', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1, postTestData.activePuzzle2])
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
                .expect(201, [postTestData.activePuzzle1Response, postTestData.activePuzzle2Response])
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });

    describe('Test code 400 POST requests', function () {
        it('Post invalid path 1 returns 400 error message', function (done) {
            request
                .post('/invalid')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post invalid path 2 returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames/invalid')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post invalid path 3 returns 400 error message', function (done) {
            request
                .post('/api/v1/user/invalid')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post duplicate activePuzzle returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .end(function(err, res) {
                });
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post no body returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post empty user id field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.userIDBlank])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post no user id field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.userIDNotPresent])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post user id is integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.userIDIsInt])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post empty puzzle field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleBlank])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post no puzzle field returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleNotPresent])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle too long returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleIsTooLong])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle too short returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleIsTooShort])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzle invalid character returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleHasInvalidCharacter])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post currentTime is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.currentTimeIsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentStateIsTooLong])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentStateIsTooShort])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentStateHasInvalidCharacter])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentNotesState is too long returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentNotesStateIsTooLong])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentNotesState is too short returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentNotesStateIsTooShort])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post puzzleCurrentNotesState has invalid character returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.puzzleCurrentNotesStateHasInvalidCharacter])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post numHintsAskedFor is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.numHintsAskedForIsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post numWrongCellsPlayed is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.numWrongCellsPlayedIsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_SINGLE is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_SINGLE_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_SINGLE is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_SINGLE_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_PAIR is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_PAIR_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_TRIPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_QUADRUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_QUINTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_SEXTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_SEPTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post NAKED_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.NAKED_OCTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_PAIR is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_PAIR_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_TRIPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_QUADRUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_QUINTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_SEXTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_SEPTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post HIDDEN_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.HIDDEN_OCTUPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post POINTING_PAIR is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.POINTING_PAIR_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post POINTING_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.POINTING_TRIPLET_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post BOX_LINE_REDUCTION is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.BOX_LINE_REDUCTION_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post X_WING is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.X_WING_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post SWORDFISH is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.SWORDFISH_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post SINGLES_CHAINING is not integer returns 400 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.SINGLES_CHAINING_IsNotInteger])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
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
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post invalid Auth header returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Post expired Auth token returns 401 error message', function (done) {
            request
                .post('/api/v1/user/activeGames')
                .send([postTestData.activePuzzle1])
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + globalTestData.expiredAccessToken)
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });
});
