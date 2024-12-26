import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Restaurant App
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/menu">
          Menu
        </Button>
        <Button color="inherit" href="/admin">
          Admin
        </Button>
        <Button color="inherit" href="/login">
          Login
        </Button>
        <Button color="inherit" href="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
