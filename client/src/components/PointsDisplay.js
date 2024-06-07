import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const PointsDisplay = (point) => {
  const points = useSelector((state) => state.points);

  return (
    <Typography variant="h5">
      Points: {points}
    </Typography>
  );
};

export default PointsDisplay;
