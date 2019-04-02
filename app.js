const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bitCore = require('bitcore-lib');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/wallet', function(req, res) {
    const brainsrc = req.body.brainsrc;
    console.log(brainsrc);
    const input = new Buffer.from(brainsrc);
    const hash = bitCore.crypto.Hash.sha256(input);
    const bn = bitCore.crypto.BN.fromBuffer(hash);
    const pk = new bitCore.PrivateKey(bn).toWIF();
    const addy = new bitCore.PrivateKey(bn).toAddress();
    res.send(`The Brain Wallet of: ${brainsrc}<br> Addy: ${addy}<br> Private Key: ${pk}`);
});

app.listen(8088, function() {
    console.log('go');
})