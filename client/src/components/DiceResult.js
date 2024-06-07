import React from 'react';
import { Typography } from '@mui/material';

const DiceResult = ({ dice }) => {
  return (
    <Typography variant="h4">
      Dice Roll: {dice[0]} + {dice[1]} = {dice[0] + dice[1]}
    </Typography>
  );
};

export default DiceResult;
