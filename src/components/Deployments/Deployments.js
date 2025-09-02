import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import LaunchIcon from "@mui/icons-material/Launch";
import HomeIcon from "@mui/icons-material/Home";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import WaterIcon from "@mui/icons-material/Water";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const DeploymentsSection = styled(Box)(({ theme }) => ({
  background: "var(--background-white)",
  padding: "80px 0",
  position: "relative",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  textAlign: "center",
  marginBottom: "20px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: "var(--gradient-primary)",
    borderRadius: "2px",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: "var(--text-secondary)",
  textAlign: "center",
  marginBottom: "60px",
  maxWidth: "700px",
  margin: "0 auto 60px auto",
  lineHeight: 1.6,
}));

const DeploymentCard = styled(Card)(({ theme }) => ({
  background: "var(--background-white)",
  borderRadius: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "var(--shadow-md)",
  border: "1px solid var(--border-color)",
  overflow: "hidden",
  transition: "all 0.3s ease",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "var(--gradient-primary)",
  },
  "&:nth-of-type(2n)::before": {
    background: "var(--gradient-secondary)",
  },
  "&:nth-of-type(3n)::before": {
    background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  },
  "&:nth-of-type(4n)::before": {
    background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "var(--shadow-xl)",
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: "30px 30px 20px 30px",
  textAlign: "center",
}));

const PlatformIcon = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "var(--gradient-primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px auto",
  fontSize: "36px",
  color: "white",
  boxShadow: "var(--shadow-md)",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 600,
  color: "var(--text-primary)",
  marginBottom: "12px",
  lineHeight: 1.3,
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  color: "var(--text-secondary)",
  lineHeight: 1.6,
  fontSize: "0.95rem",
  marginBottom: "20px",
}));

const TechStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "20px",
  justifyContent: "center",
}));

const TechChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.75rem",
  height: "24px",
  background: "rgba(102, 126, 234, 0.1)",
  color: "var(--primary-color)",
  border: "1px solid rgba(102, 126, 234, 0.2)",
  "&:hover": {
    background: "rgba(102, 126, 234, 0.2)",
  },
}));

const LaunchButton = styled(Button)(({ theme }) => ({
  background: "var(--gradient-primary)",
  color: "white",
  padding: "12px 30px",
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
  marginTop: "auto",
  margin: "20px 30px 30px 30px",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "var(--shadow-lg)",
  },
}));

const StatusBadge = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: "15px",
  right: "15px",
  background: "#10b981",
  color: "white",
  fontSize: "0.75rem",
  fontWeight: 600,
  height: "28px",
  "& .MuiChip-label": {
    padding: "0 12px",
  },
}));

const deployments = [
  {
    title: "Sri Lanka Real Estate Platform",
    description:
      "Comprehensive real estate platform with real-time house monitoring, rich property data collection, and high-precision analytics for houses, apartments, and commercial spaces.",
    url: "https://srilankahome-c2fxacaveme7f3d2.canadaeast-01.azurewebsites.net/",
    icon: <HomeIcon />,
    technologies: ["React", "Azure", "ML Analytics", "Real-time Data"],
    status: "Live",
  },
  {
    title: "Smart House Analyzer",
    description:
      "AI-powered house analysis system that automatically collects, processes, and analyzes property data with machine learning algorithms for real-time market updates.",
    url: "https://srilankahome-c2fxacaveme7f3d2.canadaeast-01.azurewebsites.net/",
    icon: <AnalyticsIcon />,
    technologies: [
      "Machine Learning",
      "Azure",
      "Auto-Analysis",
      "Data Pipeline",
    ],
    status: "Live",
  },
  {
    title: "Agricultural Analytics Platform",
    description:
      "Advanced agricultural analysis platform providing comprehensive field data, yearly crop forecasting, and agricultural insights for informed farming decisions.",
    url: "https://icy-plant-038eed50f.6.azurestaticapps.net/",
    icon: <AgricultureIcon />,
    technologies: ["Azure Static Apps", "Data Analytics", "Forecasting", "IoT"],
    status: "Live",
  },
  {
    title: "Hydro Basin Analysis System",
    description:
      "Comprehensive river network and basin analysis platform providing real-time river data, weather monitoring, and advanced flood prediction capabilities.",
    url: "https://hydro-basin-frontend-fqchcgd0a4a5esar.canadaeast-01.azurewebsites.net/",
    icon: <WaterIcon />,
    technologies: ["React", "Azure", "Weather API", "Flood Prediction"],
    status: "Live",
  },
];

const Deployments = () => {
  const handleLaunchPlatform = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getIconWithGradient = (icon, index) => {
    const gradients = [
      "var(--gradient-primary)",
      "var(--gradient-secondary)",
      "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    ];

    return (
      <PlatformIcon sx={{ background: gradients[index % gradients.length] }}>
        {icon}
      </PlatformIcon>
    );
  };

  return (
    <DeploymentsSection>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Live Deployments</SectionTitle>
        <SectionSubtitle variant="h6">
          Explore our production-ready platforms currently serving thousands of
          users worldwide. These deployments showcase our expertise in building
          scalable, real-world solutions.
        </SectionSubtitle>

        <Grid container spacing={4}>
          {deployments.map((deployment, index) => (
            <Grid item xs={12} sm={6} lg={6} key={index}>
              <DeploymentCard>
                <StatusBadge label={deployment.status} />
                <CardHeader>
                  {getIconWithGradient(deployment.icon, index)}
                  <CardTitle variant="h5">{deployment.title}</CardTitle>
                  <CardDescription variant="body2">
                    {deployment.description}
                  </CardDescription>
                  <TechStack>
                    {deployment.technologies.map((tech, techIndex) => (
                      <TechChip
                        key={techIndex}
                        label={tech}
                        variant="outlined"
                      />
                    ))}
                  </TechStack>
                </CardHeader>
                <LaunchButton
                  onClick={() => handleLaunchPlatform(deployment.url)}
                  endIcon={<LaunchIcon />}
                  variant="contained"
                >
                  Launch Platform
                </LaunchButton>
              </DeploymentCard>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Typography
            variant="body1"
            sx={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              fontStyle: "italic",
            }}
          >
            All platforms are actively maintained and continuously updated with
            new features
          </Typography>
        </Box>
      </Container>
    </DeploymentsSection>
  );
};

export default Deployments;
