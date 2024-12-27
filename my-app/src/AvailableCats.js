// src/components/AvailableCats.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import './AvailableCats.css'; // Import CSS file

const AvailableCats = () => {
  // Sample cat data
  const cats = [
    { id: 1, name: 'Fluffy', age: 2, breed: 'Siamese', imgUrl: '/images/siamese-cat.jpg' },
    { id: 2, name: 'Whiskers', age: 3, breed: 'Persian', imgUrl: '/images/persian.jpg' },
    { id: 3, name: 'Mittens', age: 1, breed: 'Bengal', imgUrl: '/images/Bengal.jpg' },
    { id: 4, name: 'Snowball', age: 4, breed: 'Maine Coon', imgUrl: '/images/maine coon.jpg' },
    { id: 5, name: 'Smokey', age: 2, breed: 'Ragdoll', imgUrl: '/images/Ragdoll.jpg' },
    { id: 6, name: 'Luna', age: 3, breed: 'Sphynx', imgUrl: '/images/sphynx-1-.jpg' },
  ];

  // States for search
  const [searchName, setSearchName] = useState('');
  const [searchBreed, setSearchBreed] = useState('');
  const [filteredCats, setFilteredCats] = useState(cats);

  // Unique names and breeds for dropdown options
  const uniqueNames = [...new Set(cats.map((cat) => cat.name))];
  const uniqueBreeds = [...new Set(cats.map((cat) => cat.breed))];

  // Handle search functionality
  const handleSearch = () => {
    const filtered = cats.filter(
      (cat) =>
        (!searchName || cat.name === searchName) &&
        (!searchBreed || cat.breed === searchBreed)
    );
    setFilteredCats(filtered);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/back5.jpg')`, // Your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure it covers full height
        padding: '20px', // Add padding to make content not stick to edges
      }}
    >
      <Typography variant="h4" component="h1" className="heading" style={{ color: '#fff' }}>
        Available Cats
      </Typography>

      {/* Search Inputs */}
      <Box className="search-container">
        <Select
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          displayEmpty
          className="search-dropdown"
        >
          <MenuItem value="">Search by Name</MenuItem>
          {uniqueNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
          displayEmpty
          className="search-dropdown"
        >
          <MenuItem value="">Search by Breed</MenuItem>
          {uniqueBreeds.map((breed) => (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          ))}
        </Select>

        <Button variant="contained" color="primary" onClick={handleSearch} className="search-button">
          Search
        </Button>
      </Box>

      {/* Cat Cards */}
      <Grid container spacing={3} className="card-container">
        {filteredCats.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat.id}>
            <Card className="cat-card">
              <CardMedia
                component="img"
                height="150"
                image={cat.imgUrl}
                alt={cat.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {cat.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {cat.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breed: {cat.breed}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AvailableCats;
