const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { rollDice, calculateResult } = require('./game');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let points = 5000;

app.post('/api/roll', (req, res) => {
    const { bet } = req.body;
    const dice = rollDice();
    const result = calculateResult(bet, dice, points);
    points = result.newPoints;
    res.json(result);
});

app.post('/api/points', (req, res) => {
    const { newPoints } = req.body;
    points = newPoints;
    res.json(points);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});