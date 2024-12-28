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
import './AvailableCats.css';
// Ensure this CSS file exists

const AvailableCats = () => {
  const cats = [
    { id: 1, name: 'Fluffy', age: 2, breed: 'Siamese', imgUrl: '/images/siamese-cat.jpg' },
    { id: 2, name: 'Whiskers', age: 3, breed: 'Persian', imgUrl: '/images/persian.jpg' },
    { id: 3, name: 'Mittens', age: 1, breed: 'Bengal', imgUrl: '/images/Bengal.jpg' },
    { id: 4, name: 'Snowball', age: 4, breed: 'Maine Coon', imgUrl: '/images/maine coon.jpg' },
    { id: 5, name: 'Smokey', age: 2, breed: 'Ragdoll', imgUrl: '/images/Ragdoll.jpg' },
    { id: 6, name: 'Luna', age: 3, breed: 'Sphynx', imgUrl: '/images/sphynx-1-.jpg' },
  ];

  const [searchName, setSearchName] = useState('');
  const [searchBreed, setSearchBreed] = useState('');
  const [filteredCats, setFilteredCats] = useState(cats);

  const handleSearch = () => {
    const filtered = cats.filter(
      (cat) =>
        (!searchName || cat.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!searchBreed || cat.breed.toLowerCase().includes(searchBreed.toLowerCase()))
    );
    setFilteredCats(filtered);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/back5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="h1" style={{ color: '#fff', marginBottom: '20px' }}>
        Available Cats
      </Typography>

      <Box display="flex" gap="10px" marginBottom="20px">
        <Select
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          displayEmpty
          style={{ minWidth: '200px', background: '#fff', borderRadius: '5px' }}
        >
          <MenuItem value="">Search by Name</MenuItem>
          {[...new Set(cats.map((cat) => cat.name))].map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
          displayEmpty
          style={{ minWidth: '200px', background: '#fff', borderRadius: '5px' }}
        >
          <MenuItem value="">Search by Breed</MenuItem>
          {[...new Set(cats.map((cat) => cat.breed))].map((breed) => (
            <MenuItem key={breed} value={breed}>
              {breed}
            </MenuItem>
          ))}
        </Select>

        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Grid container spacing={4}>
        {filteredCats.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat.id}>
            <Card style={{ height: '400px', borderRadius: '15px' }}>
              <CardMedia
                component="img"
                height="250"
                image={cat.imgUrl}
                alt={cat.name}
                style={{ objectFit: 'cover' }}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                  {cat.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Age: {cat.age}
                </Typography>
                <Typography variant="body1" color="text.secondary">
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
