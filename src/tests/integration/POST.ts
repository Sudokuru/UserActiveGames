const assert = require('assert');
const http = require("http");
const https = require("https");
require('dotenv').config();

var res;


describe('POST API', function () {

    before(function () {
        const options = {
            hostname: 'dev-2a2cfx07i0jw6jgj.us.auth0.com',
            path: '/oauth/token',
            //port: '443',
            method: 'GET',
            headers: {
                grant_type: 'password',
                username: 'gallant.thomas@outlook.com',
                password: 'Lunchcode28650!',
                client_id: 'hOIGIkNEFQwLPm94XoKRykODfBAF4u3F',
                client_secret: 'lwSjY8B9012jicxhubQlRjY2iOndH2iaEC45V_hhF9aqJlTpPVIUhUUMI2pGwlX0',
                audience: process.env.AUTH0_AUDIENCE,
                scope: 'create:sudoku_puzzle update:sudoku_puzzle delete:sudoku_puzzle'
            }
        };
        console.log("HELLO!");
        // it('it should retrieve access token', function (done) {
        //     http.get(options, function (response) {
        //         console.log(response);
        //         console.log("HELLO!");
        //         done();
        //     });
        // });
        return https.get('https://dev-2a2cfx07i0jw6jgj.us.auth0.com/oauth/token', function (response) {
            console.log(response.statusCode);
            console.log("HELLO!");
            res = response;
            console.log(res);
        });
    });

    describe('POST one puzzle', function () {
        it('it should POST one puzzle', function (done) {
            http.get('http://localhost:3001/api/v1/user/activeGames', function (response) {
                assert.equal(response.statusCode, 401);
                done();
            })
        });
    });
});
