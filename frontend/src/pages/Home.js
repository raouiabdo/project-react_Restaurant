import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6MHAPIdriW6ZOasfYcmB3JWO8UkLqsveuQ&s')`, // Remplacez par l'URL de votre image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay pour assombrir l'image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Contenu superposé */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Our Restaurant
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discover our delicious menu and make a reservation today!
        </Typography>
        <Button variant="contained" color="secondary" href="/menu" sx={{ mt: 2 }}>
          Explore Menu
        </Button>
      </Box>
    </Box>
  );
};

export default Home;


