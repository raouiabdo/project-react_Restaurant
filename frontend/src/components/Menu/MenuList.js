import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const MenuList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} style={{ margin: '10px' }}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            <Typography variant="h6">${item.price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Add to Order
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MenuList;

