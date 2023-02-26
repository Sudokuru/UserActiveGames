let request = require('supertest');
require('dotenv').config();

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

describe('Test 400 POST errors', function () {

    it('Post empty body returns 400 error message', function (done) {
        request
            .post('/api/v1/user/activeGames')
            .send()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .expect('Content-Type', /json/)
            .expect(400, {
                Error_Message: 'Invalid Request',
                Status: 400
            })
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });


});
