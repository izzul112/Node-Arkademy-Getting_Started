const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Halo Arkademian');
})

app.listen('8080');