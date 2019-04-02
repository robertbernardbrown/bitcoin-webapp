const request = require('request');
const express = require('express');
const app = express();
let btcPrice;
let btcBlock;

request({
    url: 'https://blockchain.info/stats?format=json',
    json: true
}, function(err, response, body) {
    btcPrice = body.market_price_usd;
    btcBlock = body.n_blocks_total;
})

app.get('/', function(req, res) {
    res.send('Current block price: ' + btcPrice);
});

app.get('/block', function(req, res) {
    res.sendFile('index.html');
});

app.listen(8088, function() {
    console.log('go');
})