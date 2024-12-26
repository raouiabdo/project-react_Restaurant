import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h6">Total Orders</Typography>
          <Typography variant="h4">150</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$3,000</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
