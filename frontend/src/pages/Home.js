import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Container style={{ textAlign: "center", padding: "50px 20px" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Restaurant
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Explore our delicious menu and enjoy an unforgettable dining experience!
      </Typography>
      <Button variant="contained" color="primary" href="/menu">
        View Menu
      </Button>
    </Container>
  );
};

export default Home;


