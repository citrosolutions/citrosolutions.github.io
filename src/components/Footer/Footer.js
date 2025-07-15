import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Logo from "../assets/logo.png";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#fff"
      align="left"
      sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
    >
      {"© Copyright "}
      {new Date().getFullYear()} OeilSat
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "25vh",
        height: "auto",
        background: "linear-gradient(90deg, #a41c9d, #46caca)",
        px: 2,
        mt: 3,
      }}
    >
      <Box
        component="footer"
        sx={{
          width: "100%",
          py: 3,
          textAlign: "center",
        }}
      >
        {/* Row with Logo | Title + Description | Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            mb: 2,
            color: "#fff",
          }}
        >
          {/* Logo Column */}
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <img
              src={Logo}
              alt="OeilSat Logo"
              style={{ height: 150, width: "auto" }}
            />
          </Box>

          {/* Topic + Description Column */}
          <Box
            sx={{
              textAlign: { xs: "left", md: "left" },
              maxWidth: { xs: "100%", md: "40%" },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              Let's Get Started
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: { xs: "0.75rem", sm: "1rem" } }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Box>

          {/* Links Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              color: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              Legal
            </Typography>
            <Link
              color="inherit"
              sx={{ mb: 1, fontSize: { xs: "0.75rem", sm: "1rem" } }}
            >
              Privacy Policy
            </Link>
            <Link
              color="inherit"
              sx={{ mb: 1, fontSize: { xs: "0.75rem", sm: "1rem" } }}
            >
              Terms & Conditions
            </Link>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2, borderColor: "#fff" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Copyright */}
          <Copyright />
          <Box textAlign="center" sx={{ mb: { xs: 2, md: 0 } }}>
            <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
              <img
                src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-google.svg"
                alt="Google Logo"
                style={{ height: 40, width: "auto" }}
              />
              <img
                src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-nasa.svg"
                alt="NASA Logo"
                style={{ height: 40, width: "auto" }}
              />
              <img
                src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-microsoft.svg"
                alt="Microsoft Logo"
                style={{ height: 40, width: "auto" }}
              />
            </Box>
          </Box>
          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "row", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Link color="#fff" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              <FacebookIcon />
            </Link>
            <Link color="#fff" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              <XIcon />
            </Link>
            <Link color="#fff" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              <LinkedInIcon />
            </Link>
            <Link color="#fff" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              <InstagramIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
