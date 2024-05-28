import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';

const ComponentSelector = ({ label, options, value, onChange }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default ComponentSelector;
