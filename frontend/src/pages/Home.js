import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Restaurant
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore our delicious menu and place your order today!
      </Typography>
      <Button variant="contained" color="primary" href="/menu">
        View Menu
      </Button>
    </Container>
  );
};

export default Home;

