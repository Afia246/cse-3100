// src/components/AvailableCats.js
import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const AvailableCats = () => {
  // Sample cat data with actual breed names
  const cats = [
    { id: 1, name: 'Fluffy', age: 2, breed: 'Siamese', imgUrl: 'https://placekitten.com/200/200' },
    { id: 2, name: 'Whiskers', age: 3, breed: 'Persian', imgUrl: 'https://placekitten.com/200/200' },
    { id: 3, name: 'Mittens', age: 1, breed: 'Bengal', imgUrl: 'https://placekitten.com/200/200' },
    { id: 4, name: 'Snowball', age: 4, breed: 'Maine Coon', imgUrl: 'https://placekitten.com/200/200' },
    { id: 5, name: 'Smokey', age: 2, breed: 'Ragdoll', imgUrl: 'https://placekitten.com/200/200' },
    { id: 6, name: 'Luna', age: 3, breed: 'Sphynx', imgUrl: 'https://placekitten.com/200/200' },
    { id: 7, name: 'Bella', age: 1, breed: 'Siberian', imgUrl: 'https://placekitten.com/200/200' },
    { id: 8, name: 'Oliver', age: 5, breed: 'Scottish Fold', imgUrl: 'https://placekitten.com/200/200' },
  ];

  return (
    <Grid container spacing={3}>
      {cats.map((cat) => (
        <Grid item xs={12} sm={6} md={4} key={cat.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={cat.imgUrl}
              alt={cat.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
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
  );
};

export default AvailableCats;
