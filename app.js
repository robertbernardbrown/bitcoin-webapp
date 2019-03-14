const http = require('http');
const request = require('request');

http.createServer(function (req, res) {
    request({
        url: 'https://blockchain.info/stats?format=json',
        json: true
    }, function (err, response, body) {
        if (err) {
            throw new Error(err);
        }
        console.log(body)
    })
    res.end('bitcoin to the moon');
}).listen(8080); 