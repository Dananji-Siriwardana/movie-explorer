import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <div>
      <TextField
        label="Search Movies"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" sx={{ marginTop: 2 }}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
