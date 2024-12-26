import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

const MenuList = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              image={item.image || "https://via.placeholder.com/150"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6">${item.price}</Typography>
            </CardContent>
            <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
              Add to Order
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuList;


