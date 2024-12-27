// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Purrfect Adoption
        </Typography>
        <Button color="inherit">Available Cats</Button>
        <Button color="inherit">Donate</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
