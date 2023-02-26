let request = require('supertest');
require('dotenv').config();

const preRequest = request('https://' + process.env.AUTH0_BASE_URL);

request = request('http://localhost:3001');

let token = null;


describe('POST API', function () {

    before(function (done) {
        preRequest
            .post('/oauth/token')
            .send('grant_type=password&username=' + process.env.AUTH0_USERNAME + '&password=' + process.env.AUTH0_PASSWORD
                + '&client_id=' + process.env.AUTH0_CLIENT_ID + '&client_secret=' + process.env.AUTH0_CLIENT_SECRET +
                '&audience=' + process.env.AUTH0_AUDIENCE + '&scope=' + process.env.AUTH0_SCOPE + '&ContentType=application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .expect(function(res) {
                console.log(res.body);
                token = res.body.access_token;
                console.log("token: " + token);
            })
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('it should POST one puzzle', function (done) {
        console.log("Token: " + token);
        request
            .post('/api/v1/user/activeGames')
            .send()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .expect(function(res) {
                console.log("Hello!");
                console.log(res.body);
            })
            .expect(201)
            .end(function(err, res) {
                console.log("Goodbye!");
                if (err) return done(err);
                return done();
            });
    });
});
