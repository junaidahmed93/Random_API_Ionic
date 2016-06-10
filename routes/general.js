var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/random',function (req,res) {
    console.log('router wala')
    request('https://randomuser.me/api/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body); // Show the HTML for the Modulus homepage.
    }
});
    
})

module.exports = router;