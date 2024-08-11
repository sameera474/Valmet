import React from "react";

import { Button, Box, Typography, Container, Paper, Grid } from "@mui/material";
import BgImage from "../images/HomePic.png";

const Home = () => {
  return (
    <Container>
      {/* <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${BgImage})`,
          height: 400,
          display: "flex",
          bacggroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
          tectAling: "Center",
          color: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Integrated web inspection and monitoring systems
        </Typography>
        <Typography variant="h6" gutterBottom>
          Valmet IQ Machine Vision
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box> */}

      <Paper>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Integrated web inspection and monitoring systems
          </Typography>
          <Typography variant="h4" gutterBottom>
            Valmet IQ Machine Vision
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              marginBottom: 5,
            }}
            alt="BgImage"
            src={BgImage}
          ></Box>
        </Grid>
      </Paper>
      <Paper>
        <Grid container spacing={1} sx={{ display: "flex", paddingBottom: 5 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 35,
                backgroundColor: "#4EB946",
                padding: "18px 36px",
                fontSize: "18px",
              }}
            >
              IQ Web Monitoring System
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 35,
                backgroundColor: "#4EB946",
                padding: "18px 36px",
                fontSize: "18px",
                // color: "secondary",
              }}
            >
              Valmet IQ Web Inspection
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
