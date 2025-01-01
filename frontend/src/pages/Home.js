import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  const backgroundImage =
    "https://th.bing.com/th/id/R.403f8e5b1f4306efd17aee040a28d905?rik=UR%2b7GEEcNXpPdA&riu=http%3a%2f%2fwww.insplosion.com%2fblog%2fwp-content%2fuploads%2f2020%2f12%2fThe-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg&ehk=ccnea3EgjOq02rwlw0wrXpxTCmdkoq2WiJrBHiKQKw4%3d&risl=&pid=ImgRaw&r=0";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // Utilisation correcte de l'URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken the image */}
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

      {/* Text Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          top: "50%", // Position the text in the middle
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
