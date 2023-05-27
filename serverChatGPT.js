const express = require('express');
const cors = require('cors');

const graphCalcApp = express();
let PORT = 3001;

graphCalcApp.use(cors());

graphCalcApp.use(express.static(__dirname));

graphCalcApp.get('/', function(req, res) {
    res.sendFile(__dirname + '/graphingCalculator.html');
});

graphCalcApp.listen(PORT, function() {
    console.log(`App Listening on port ${PORT}`);
});