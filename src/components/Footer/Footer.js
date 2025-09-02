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
      color="rgba(255, 255, 255, 0.8)"
      align="left"
      sx={{
        fontSize: { xs: "0.85rem", sm: "1rem" },
        fontWeight: 400,
      }}
    >
      {"© Copyright "}
      {new Date().getFullYear()} OeilSat. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        color: "#ffffff",
        mt: 0,
      }}
    >
      <Box
        component="footer"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "auto 1fr auto",
            },
            gap: { xs: 4, md: 6 },
            alignItems: "flex-start",
            mb: 4,
          }}
        >
          {/* Logo Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={Logo}
              alt="OeilSat Logo"
              style={{
                height: 120,
                width: "auto",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              OeilSat
            </Typography>
          </Box>

          {/* Company Info Column */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
                fontWeight: 600,
                mb: 2,
                color: "#ffffff",
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.8)",
                mb: 3,
              }}
            >
              Join leading organizations that trust OeilSat for innovative
              geospatial solutions, machine learning platforms, and cutting-edge
              analytics that drive real results.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  mb: 1.5,
                  color: "#ffffff",
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 0.5,
                }}
              >
                Email: info@oeilsat.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Phone: +1 (555) 123-4567
              </Typography>
            </Box>
          </Box>

          {/* Quick Links Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              minWidth: "150px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 2,
                color: "#ffffff",
              }}
            >
              Quick Links
            </Typography>
            <Link
              color="inherit"
              sx={{
                mb: 1.5,
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
              href="#solutions"
            >
              Solutions
            </Link>
            <Link
              color="inherit"
              sx={{
                mb: 1.5,
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
              href="#products"
            >
              Products
            </Link>
            <Link
              color="inherit"
              sx={{
                mb: 1.5,
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
              href="#about-us"
            >
              About Us
            </Link>
            <Link
              color="inherit"
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
              href="#contact"
            >
              Contact
            </Link>
          </Box>
        </Box>

        {/* Partner Logos */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              mb: 3,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Trusted Partners
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: { xs: 3, md: 4 },
              opacity: 0.8,
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <img
              src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-google.svg"
              alt="Google Logo"
              style={{
                height: 35,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-nasa.svg"
              alt="NASA Logo"
              style={{
                height: 35,
                width: "auto",
                filter: "brightness(1.2) contrast(1.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "8px",
                borderRadius: "6px",
              }}
            />
            <img
              src="https://rafisvisualassets.s3.us-west-1.amazonaws.com/logo-microsoft.svg"
              alt="Microsoft Logo"
              style={{
                height: 35,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            my: 3,
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: "1px",
          }}
        />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Copyright */}
          <Copyright />

          {/* Legal Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Link
              color="inherit"
              sx={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              color="inherit"
              sx={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#ffffff",
                  textDecoration: "underline",
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Link
              color="inherit"
              sx={{
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.7)",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#3b5998",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <FacebookIcon />
            </Link>
            <Link
              color="inherit"
              sx={{
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.7)",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#1da1f2",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <XIcon />
            </Link>
            <Link
              color="inherit"
              sx={{
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.7)",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#0077b5",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <LinkedInIcon />
            </Link>
            <Link
              color="inherit"
              sx={{
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.7)",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#e4405f",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <InstagramIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
