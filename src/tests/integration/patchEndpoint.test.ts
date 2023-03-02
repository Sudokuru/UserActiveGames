let request = require('supertest');
require('dotenv').config();
import { token } from "./data/globalHooks.test";
import { postTestData } from "./data/postTestData.test";
import { globalTestData} from "./data/globalTestData.test";

request = request('http://localhost:3001');

describe('Test Delete requests for /api/v1/user/activeGames', function () {
    /*
     * This method populates the database before each test
     */
    beforeEach (function (done) {
        request
            .post('/api/v1/user/activeGames')
            .send([postTestData.activePuzzle1, postTestData.activePuzzle2,
                postTestData.activePuzzle3, postTestData.activePuzzle2MovesSwapped])
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });

    describe('Test code 200 PATCH requests', function () {
        describe('Test code 200 present PATCH requests', function () {
            it('Patch empty query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 4 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by puzzle query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ puzzle: postTestData.puzzle1})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by userID query returns 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Thomas"})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 3 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by currentTime query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by numHintsAskedFor query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numHintsAskedFor: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by numWrongCellsPlayed query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numWrongCellsPlayed: 0 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by moves AND query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1, puzzleCurrentNotesState: postTestData.puzzle2Notes1} })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by moves OR query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ moves: { puzzleCurrentState: postTestData.puzzle2Move1} },
                        { moves: { puzzleCurrentNotesState: postTestData.puzzle2Notes1}})
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 2 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_SINGLE query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_SINGLE query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_PAIR query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_TRIPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_QUADRUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_QUINTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_SEXTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_SEPTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by NAKED_OCTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_PAIR query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_TRIPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_QUADRUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_QUINTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_SEXTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_SEPTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by HIDDEN_OCTUPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by POINTING_PAIR query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by POINTING_TRIPLET query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by BOX_LINE_REDUCTION query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by X_WING query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by SWORDFISH query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by SINGLES_CHAINING query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 11 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch by numWrongCellsPlayedPerStrategy query 200 and expected response', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query(
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 11 },
                        { 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 11 },
                        { 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 11 },
                        { 'numWrongCellsPlayedPerStrategy.X_WING': 11 },
                        { 'numWrongCellsPlayedPerStrategy.SWORDFISH': 11 },
                        { 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 11 }
                    )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(function(res) {
                    })
                    .expect(200, { acknowledged: true, deletedCount: 1 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });
        });

        describe('Test code 200 not present PATCH requests', function () {
            it('Patch userID is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo make valid not found puzzle
            it('Patch puzzle is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ userID: "Jimmy" })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch currentTime is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentState not found
            it('Patch puzzleCurrentState is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            // todo get valid puzzleCurrentNotesState not found
            it('Patch puzzleCurrentNotesState is not present 200 success error message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ currentTime: 1000 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });



            it('Patch numHintsAskedFor is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numHintsAskedFor: 100} )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch numWrongCellsPlayed is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ numWrongCellsPlayed: 100} )
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SINGLE is not integer present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SINGLE is not integer present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_PAIR is not integer present 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch NAKED_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_PAIR is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUADRUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_QUINTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEXTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_SEPTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch HIDDEN_OCTUPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_PAIR is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch POINTING_TRIPLET is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch BOX_LINE_REDUCTION is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch X_WING is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.X_WING': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SWORDFISH is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });

            it('Patch SINGLES_CHAINING is not present returns 200 success message', function (done) {
                request
                    .patch('/api/v1/user/activeGames')
                    .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': 100 })
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .expect('Content-Type', /json/)
                    .expect(200, { acknowledged: true, deletedCount: 0 })
                    .end(function(err, res) {
                        if (err) return done(err);
                        return done();
                    });
            });
        });
    });

    describe('Test code 400 Patch requests', function () {
        it('Patch invalid path 1 returns 400 error message', function (done) {
            request
                .patch('/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid path 2 returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid path 3 returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/invalid')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid userID query returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ userID: ""})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid character puzzle query returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ puzzle: "Banana"})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch empty puzzle field returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ puzzle: "" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzle too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleIsTooLong })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzle too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleIsTooShort})
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzle invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ puzzle: postTestData.puzzleHasInvalidCharacter })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch currentTime is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ currentTime: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzleCurrentState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateIsTooLong} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzleCurrentState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateIsTooShort} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzleCurrentState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentState: postTestData.puzzleCurrentStateHasInvalidCharacter} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzleCurrentNotesState is too long returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateIsTooLong} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        //todo convert
        it('Patch puzzleCurrentNotesState is too short returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateIsTooShort} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch puzzleCurrentNotesState has invalid character returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ moves: {puzzleCurrentNotesState: postTestData.puzzleCurrentNotesStateHasInvalidCharacter} })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch numHintsAskedFor is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ numHintsAskedFor: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch numWrongCellsPlayed is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ numWrongCellsPlayed: "Banana"} )
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_SINGLE is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch NAKED_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_QUADRUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_QUINTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_SEXTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_SEPTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch HIDDEN_OCTUPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch POINTING_PAIR is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.POINTING_PAIR': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch POINTING_TRIPLET is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.POINTING_TRIPLET': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch BOX_LINE_REDUCTION is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch X_WING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.X_WING': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch SWORDFISH is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.SWORDFISH': "Banana" })
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .expect(400, globalTestData.ErrorMessage400)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch SINGLES_CHAINING is not integer returns 400 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .query({ 'numWrongCellsPlayedPerStrategy.SINGLES_CHAINING': "Banana" })
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

    describe('Test code 401 Patch requests', function () {
        it('Patch no Auth header returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch invalid Auth header returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer')
                .expect('Content-Type', /json/)
                .expect(401, globalTestData.ErrorMessage401)
                .end(function(err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it('Patch expired Auth token returns 401 error message', function (done) {
            request
                .patch('/api/v1/user/activeGames')
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
