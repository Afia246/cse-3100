// src/components/Donate.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
} from '@mui/material';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation, ${name}!`);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/donate1.jpg')`, // Ensure the image is in the public/images folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container maxWidth="sm">
        {/* Heading Section */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: '#000', fontWeight: 'bold' }} // Text is now black
        >
          Donate to Purrfect Adoption
        </Typography>

        <Card elevation={3}>
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{ color: '#555' }}
            >
              Your contribution helps us care for more cats and find them loving
              homes.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Donation Amount"
                  variant="outlined"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                  type="number"
                  required
                />
                <TextField
                  label="Your Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  type="email"
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Donate Now
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Donate;
