import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactSection = styled(Box)(({ theme }) => ({
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
  maxWidth: "600px",
  margin: "0 auto 60px auto",
  lineHeight: 1.6,
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  background: "var(--background-white)",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "var(--shadow-lg)",
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

const ContactInfo = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98))",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "40px",
  color: "#1a1a1a",
  height: "fit-content",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "24px",
  "&:last-child": {
    marginBottom: 0,
  },
  cursor: "pointer",
  transition: "all 0.3s ease",
  padding: "8px",
  borderRadius: "8px",
  "&:hover": {
    background: "rgba(33, 150, 243, 0.1)",
    transform: "translateX(5px)",
    boxShadow: "0 2px 8px rgba(33, 150, 243, 0.2)",
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #2196f3, #00bcd4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "16px",
  color: "white",
  boxShadow: "0 4px 12px rgba(33, 150, 243, 0.3)",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "var(--gradient-primary)",
  color: "white",
  padding: "12px 40px",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "var(--shadow-md)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "var(--shadow-lg)",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "&:hover fieldset": {
      borderColor: "var(--primary-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-color)",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--primary-color)",
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Contact information
  const contactEmail = "info" + String.fromCharCode(64) + "oeilsat.com";
  const contactPhone = "+1 (443) 364-8005";
  const contactAddress = "8212 Red Gate Ct, Bowie, MD 20715, USA";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_75gjzfv", "TEMPLATE_ID", formData, "USER_ID")
      .then((response) => {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          option: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactEmail}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactPhone}`, "_blank");
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=8212+Red+Gate+Ct,+Bowie,+MD+20715,+USA",
      "_blank"
    );
  };

  return (
    <ContactSection>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Contact Us</SectionTitle>
        <SectionSubtitle variant="h6">
          Ready to transform your business? Get in touch with our experts and
          discover how we can help you achieve your goals.
        </SectionSubtitle>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <ContactForm elevation={0}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "30px",
                }}
              >
                Send us a message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Contact Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        marginBottom: "16px",
                      }}
                    >
                      How can we assist you?
                    </Typography>
                    <RadioGroup
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="product"
                        control={
                          <Radio sx={{ color: "var(--primary-color)" }} />
                        }
                        label="I want to build my software product"
                      />
                      <FormControlLabel
                        value="join"
                        control={
                          <Radio sx={{ color: "var(--primary-color)" }} />
                        }
                        label="I want to join the company"
                      />
                      <FormControlLabel
                        value="inquiry"
                        control={
                          <Radio sx={{ color: "var(--primary-color)" }} />
                        }
                        label="I want to make an inquiry"
                      />
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio sx={{ color: "var(--primary-color)" }} />
                        }
                        label="Other"
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Tell us about your project"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton
                      type="submit"
                      variant="contained"
                      size="large"
                    >
                      Send Message
                    </SubmitButton>
                    {status && (
                      <Typography
                        sx={{
                          mt: 2,
                          color: status.includes("success") ? "green" : "red",
                          fontWeight: 500,
                        }}
                      >
                        {status}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </ContactForm>
          </Grid>

          <Grid item xs={12} md={4}>
            <ContactInfo>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  marginBottom: "30px",
                  color: "#1a1a1a",
                  background: "linear-gradient(45deg, #2196f3, #00bcd4)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get in Touch
              </Typography>

              <ContactInfoItem onClick={handleEmailClick}>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {contactEmail}
                  </Typography>
                </Box>
              </ContactInfoItem>

              <ContactInfoItem onClick={handlePhoneClick}>
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {contactPhone}
                  </Typography>
                </Box>
              </ContactInfoItem>

              <ContactInfoItem onClick={handleLocationClick}>
                <ContactIcon>
                  <LocationOnIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Office
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {contactAddress}
                  </Typography>
                </Box>
              </ContactInfoItem>

              {/* Google Maps Embed */}
              <Box
                sx={{
                  marginTop: "30px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.1234567890123!2d-76.7834567!3d38.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e1234567890a%3A0x1234567890abcdef!2s8212%20Red%20Gate%20Ct%2C%20Bowie%2C%20MD%2020715%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </Box>
            </ContactInfo>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
