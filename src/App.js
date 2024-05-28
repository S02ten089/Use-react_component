import React, { useState } from 'react';
import { Container, Grid, CssBaseline } from '@mui/material';
import Header from './components/Header';
import ComponentSelector from './components/ComponentSelector';
import BuildSummary from './components/BuildSummary';

const componentOptions = {
  CPU: ['Intel i9', 'AMD Ryzen 9', 'Intel i7', 'AMD Ryzen 7'],
  GPU: ['NVIDIA RTX 3090', 'NVIDIA RTX 3080', 'AMD RX 6900 XT', 'AMD RX 6800 XT'],
  RAM: ['16GB DDR4', '32GB DDR4', '64GB DDR4'],
  Storage: ['1TB SSD', '2TB SSD', '500GB SSD'],
  PSU: ['750W', '850W', '1000W'],
};

const App = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    CPU: '',
    GPU: '',
    RAM: '',
    Storage: '',
    PSU: '',
  });

  const handleComponentChange = (component) => (event) => {
    setSelectedComponents({
      ...selectedComponents,
      [component]: event.target.value,
    });
  };

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {Object.keys(componentOptions).map((component, index) => (
            <ComponentSelector
              key={index}
              label={component}
              options={componentOptions[component]}
              value={selectedComponents[component]}
              onChange={handleComponentChange(component)}
            />
          ))}
        </Grid>
        <Grid container style={{ marginTop: '20px' }}>
          <BuildSummary components={selectedComponents} />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
