import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import TimeLine from "./TimeLine";

const AboutSection = styled(Box)(({ theme }) => ({
  background: "var(--background-light)",
  padding: "80px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)",
    pointerEvents: "none",
  },
}));

const HeroTitle = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "80px",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  marginBottom: "20px",
  lineHeight: 1.2,
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  background: "var(--gradient-primary)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: 1.2,
  marginBottom: "40px",
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  minHeight: "400px",
}));

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  color: "var(--text-secondary)",
  lineHeight: 1.8,
  textAlign: "justify",
  background: "var(--background-white)",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "var(--shadow-md)",
  border: "1px solid var(--border-color)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: "var(--gradient-primary)",
    borderRadius: "2px 0 0 2px",
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  background: "var(--background-white)",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "var(--shadow-md)",
  border: "1px solid var(--border-color)",
  height: "fit-content",
}));

const AboutUs = () => {
  return (
    <AboutSection>
      <Container maxWidth="lg">
        <HeroTitle>
          <MainTitle variant="h2">We are</MainTitle>
          <GradientTitle variant="h2">
            innovators at the intersection of science and technology
          </GradientTitle>
        </HeroTitle>

        <ContentGrid container spacing={6}>
          <Grid item xs={12} md={6}>
            <AboutText>
              At OeilSat, we leverage the power of cutting-edge science and
              advanced technology to deliver innovative solutions for complex
              challenges. Our expertise spans real-time flood mapping, machine
              learning, blockchain data platforms, and seasonal weather
              derivatives, ensuring comprehensive support across diverse
              industries.
              <br />
              <br />
              By integrating global sensor data with sophisticated analytics, we
              provide actionable insights that drive operational success and
              enhance decision-making. Our commitment to scientific rigor and
              technical excellence is reflected in every project, as we
              continuously optimize for client success and measurable ROI.
              <br />
              <br />
              With a focus on collaboration and continuous improvement, we
              transform data into strategic assets that fuel growth and
              resilience. Join us in advancing technology and making a
              meaningful impact on the world.
            </AboutText>
          </Grid>
          <Grid item xs={12} md={6}>
            <TimelineContainer>
              <TimeLine />
            </TimelineContainer>
          </Grid>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default AboutUs;
