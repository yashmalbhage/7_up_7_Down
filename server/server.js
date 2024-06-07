const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { rollDice, calculateResult } = require('./game');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let points = 5000;

app.post('/roll', (req, res) => { // Simplify the path
    const { bet } = req.body;
    const dice = rollDice();
    const result = calculateResult(bet, dice, points);
    points = result.newPoints;
    res.json(result);
});

app.post('/points', (req, res) => {
    const { newPoints } = req.body;
    points = newPoints;
    res.json(points);
});

// Export the Express app as a module
module.exports = app;