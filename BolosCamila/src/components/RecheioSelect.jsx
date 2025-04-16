import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RecheioSelect = () => {
  const [recheio, setRecheio] = useState('');

  const handleChange = (event) => {
    setRecheio(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="recheio-label">Recheio</InputLabel>
      <Select
        labelId="recheio-label"
        id="recheio-select"
        value={recheio}
        label="Recheio"
        onChange={handleChange}
      >
        <MenuItem value="brigadeiro">Brigadeiro</MenuItem>
        <MenuItem value="doce-de-leite">Doce de Leite</MenuItem>
        <MenuItem value="beijinho">Beijinho</MenuItem>
        <MenuItem value="morango">Morango</MenuItem>
        <MenuItem value="nutella">Nutella</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RecheioSelect;
