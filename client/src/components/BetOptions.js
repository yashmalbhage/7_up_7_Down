import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBetAmount, setBetType } from '../redux/actions';
import { Button, ButtonGroup, Typography } from '@mui/material';

const BetOptions = () => {
  const dispatch = useDispatch();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleBetAmount = (amount) => {
    setSelectedAmount(amount);
    dispatch(setBetAmount(amount));
  };

  const handleBetType = (type) => {
    setSelectedType(type);
    dispatch(setBetType(type));
  };

  return (
    <div>
      <Typography variant="h6">Select Bet Amount</Typography>
      <ButtonGroup>
        <Button onClick={() => handleBetAmount(100)} variant={selectedAmount === 100 ? 'contained' : 'outlined'}>100</Button>
        <Button onClick={() => handleBetAmount(200)} variant={selectedAmount === 200 ? 'contained' : 'outlined'}>200</Button>
        <Button onClick={() => handleBetAmount(500)} variant={selectedAmount === 500 ? 'contained' : 'outlined'}>500</Button>
      </ButtonGroup>
      <Typography variant="h6" style={{ marginTop: '10px' }}>Select Bet Type</Typography>
      <ButtonGroup>
        <Button onClick={() => handleBetType('7down')} variant={selectedType === '7down' ? 'contained' : 'outlined'}>7 Down</Button>
        <Button onClick={() => handleBetType('7up')} variant={selectedType === '7up' ? 'contained' : 'outlined'}>7 Up</Button>
        <Button onClick={() => handleBetType('7')} variant={selectedType === '7' ? 'contained' : 'outlined'}>7</Button>
      </ButtonGroup>
    </div>
  );
};

export default BetOptions;
