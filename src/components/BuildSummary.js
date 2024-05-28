import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BuildSummary = ({ components }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Build Summary</Typography>
        {Object.entries(components).map(([key, value], index) => (
          <Typography key={index}>
            {key}: {value || 'Not selected'}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default BuildSummary;
