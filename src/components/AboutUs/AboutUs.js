import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import TimeLine from "./TimeLine";

const AboutUs = () => {
  return (
    <Container>
      <Box textAlign="center">
        <Typography
          variant="h3"
          component="div"
          color="black"
          sx={{
            fontSize: 55,
            fontWeight: "bold",
            mt: 2,
          }}
        >
          We are
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: 55,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #46caca, #a41c9d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "block",
            mt: 2,
          }}
        >
          innovators at the intersection of science and technology
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 10 }}>
            At OeilSat, we leverage the power of cutting-edge science and
            advanced technology to deliver innovative solutions for complex
            challenges. Our expertise spans real-time flood mapping, machine
            learning, blockchain data platforms, and seasonal weather
            derivatives, ensuring comprehensive support across diverse
            industries. By integrating global sensor data with sophisticated
            analytics, we provide actionable insights that drive operational
            success and enhance decision-making. Our commitment to scientific
            rigor and technical excellence is reflected in every project, as we
            continuously optimize for client success and measurable ROI. With a
            focus on collaboration and continuous improvement, we transform data
            into strategic assets that fuel growth and resilience. Join us in
            advancing technology and making a meaningful impact on the world.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TimeLine />
        </Grid>
      </Grid>
      {/* <Box
        textAlign="center"
        sx={{
          mt: 10,
          mb: 5,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color="text.primary"
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Trusted by
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          <img
            src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-google.svg"
            alt="Google Logo"
            style={{ height: 80 }}
          />
          <img
            src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-nasa.svg"
            alt="NASA Logo"
            style={{ height: 80 }}
          />
          <img
            src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-microsoft.svg"
            alt="Microsoft Logo"
            style={{ height: 80 }}
          />
        </Box>
      </Box> */}
    </Container>
  );
};

export default AboutUs;
