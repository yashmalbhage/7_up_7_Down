const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { rollDice, calculateResult } = require('./game');

const app = express();

// Allow CORS for your React app's domain
const allowedOrigins = ['https://7-up-7-down-auxj.vercel.app']; // Add your React app URL here

const corsOptions = {
    origin: (origin, callback) => {
        // Check if the origin is in the allowed list or is undefined (for no origin cases like direct calls from Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let points = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the 7 Up 7 Down Game API!');
});

app.post('/roll', (req, res) => {
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

// Export the Express app as a module for Vercel
module.exports = app;