import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPoints, setResult } from '../redux/actions';
import { rollDice } from '../api';
import BetOptions from './BetOptions';
import DiceResult from './DiceResult';
import PointsDisplay from './PointsDisplay';
import Loader from './Loader';
import { Button, Typography } from '@mui/material';

const Game = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.points);
  const betAmount = useSelector((state) => state.betAmount);
  const betType = useSelector((state) => state.betType);
  const result = useSelector((state) => state.result);
  const [loading, setLoading] = useState(false);

  const handleRoll = async () => {
    if (!betAmount || !betType) return;

    setLoading(true);

    try {
      const bet = { amount: betAmount, choice: betType };
      const { data } = await rollDice(bet);

      console.log('API Response:', data);

      // Check if the pointsChange and newPoints are valid numbers
      if (isNaN(data.pointsChange) || isNaN(data.newPoints)) {
        console.error('Invalid points data:', data);
      }

      // Set the result (dice and new points)
      dispatch(setResult({
        dice: data.dice,
        pointsChange: data.pointsChange,
      }));

      // Update the points
      dispatch(setPoints(data.newPoints));
    } catch (error) {
      console.error("Error rolling the dice: ", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <PointsDisplay />
      <BetOptions />
      {result && <DiceResult dice={result.dice} />}
      {loading ? (
        <Loader />
      ) : (
        <Button
          onClick={handleRoll}
          disabled={!betAmount || !betType}
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Roll Dice
        </Button>
      )}
      {result && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">
            {result.pointsChange > 0
              ? `You won ${result.pointsChange} points!`
              : `You lost ${Math.abs(result.pointsChange)} points.`}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Game;
