import React from "react";
import { Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-scroll";

const App = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, and croutons with Caesar dressing.",
      price: 12.99,
      image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051-1365x2048.jpg",
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with a lemon butter sauce.",
      price: 24.99,
      image: "https://th.bing.com/th/id/OIP.InBAq2UNH10dXh46VCvxpgHaLH?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description: "Traditional pizza with fresh mozzarella, tomatoes, and basil.",
      price: 15.99,
      image: "https://www.kimscravings.com/wp-content/uploads/2020/01/Margherita-Pizza-5-640x975.jpg",
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Rich and gooey chocolate cake with a molten center.",
      price: 8.99,
      image: "https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-2-3-400x560.jpg",
    },
    {
      id: 5,
      name: "Margarita Cocktail",
      description: "A refreshing blend of tequila, lime juice, and triple sec.",
      price: 10.99,
      image: "https://www.aimeemars.com/wp-content/uploads/2023/02/IMG_3903.webp",
    },
    {
      id: 6,
      name: "Beef Burger",
      description: "Beef patty with cheddar, lettuce, tomato, and sauce.",
      price: 14.99,
      image: "https://th.bing.com/th/id/R.378015bab3c632cf55924188799862c4?rik=5oxLgX%2f5m8KYYQ&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        backgroundImage: "url('https://th.bing.com/th/id/R.403f8e5b1f4306efd17aee040a28d905?rik=UR%2b7GEEcNXpPdA&riu=http%3a%2f%2fwww.insplosion.com%2fblog%2fwp-content%2fuploads%2f2020%2f12%2fThe-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg&ehk=ccnea3EgjOq02rwlw0wrXpxTCmdkoq2WiJrBHiKQKw4%3d&risl=&pid=ImgRaw&r=0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
        color: "#FFF",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />

      {/* Centered Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            color: "#fff",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              fontSize: "56px",
              marginBottom: "20px",
              color: "#1ABC9C",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Restaurant Menu
          </Typography>

          <Link to="menu" smooth={true} duration={500} offset={-50}>
            <Button
              style={{
                width: "90%",
                padding: "20px 40px",
                background: "#1ABC9C",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderRadius: "8px",
              }}
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Menu Section */}
      <Grid
        container
        spacing={4}
        id="menu"
        style={{
          padding: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                alt={item.name}
                height="200"
                image={item.image}
                style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
              />
              <CardContent>
                <Typography variant="h5" style={{ color: "#2C3E50", fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" style={{ color: "#1ABC9C", fontWeight: "bold" }}>
                  ${item.price}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                style={{
                  margin: "10px",
                  backgroundColor: "#1ABC9C",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Add to Order
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
