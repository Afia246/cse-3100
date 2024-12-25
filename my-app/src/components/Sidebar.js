// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';

const Sidebar = ({ searchName, handleSearchChange }) => {
  const breeds = ['Siamese', 'Persian', 'Bengal', 'Maine Coon', 'Ragdoll', 'Sphynx', 'Siberian', 'Scottish Fold'];
  
  // State for breed selection
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Breed Filter */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="breed-select-label">Select Breed</InputLabel>
        <Select
          labelId="breed-select-label"
          value={selectedBreed}
          onChange={handleBreedChange}
          label="Select Breed"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {breeds.map((breed, index) => (
            <MenuItem key={index} value={breed}>{breed}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Name Search */}
      <TextField
        label="Search by Name"
        value={searchName}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />

      {/* Search Button */}
      <Button variant="contained" color="primary" fullWidth>
        Search
      </Button>
    </Box>
  );
};

export default Sidebar;
