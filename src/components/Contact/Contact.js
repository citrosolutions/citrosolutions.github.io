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
} from "@mui/material";
import emailjs from "emailjs-com";

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

  return (
    <Container>
      <Typography
        variant="h4"
        component="div"
        color="black"
        sx={{ fontWeight: "bold", textAlign: "center", mt: 5 }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        color="gray"
        sx={{ textAlign: "center", mb: 3 }}
      >
        We'd love to hear from you! Please fill out the form below.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, mx: "auto" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              color="secondary"
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          color="secondary"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contact Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          color="secondary"
        />
        <Typography variant="h6" sx={{ mt: 3 }}>
          How can we assist you?
        </Typography>
        <RadioGroup
          name="option"
          value={formData.option}
          onChange={handleChange}
          sx={{ mt: 1 }}
        >
          <FormControlLabel
            value="product"
            control={<Radio color="secondary" />}
            label="I want to build my software product"
          />
          <FormControlLabel
            value="join"
            control={<Radio color="secondary" />}
            label="I want to join the company"
          />
          <FormControlLabel
            value="inquiry"
            control={<Radio color="secondary" />}
            label="I want to make an inquiry"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="secondary" />}
            label="Other"
          />
        </RadioGroup>
        <TextField
          fullWidth
          margin="normal"
          label="Tell us a bit about your need"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
          color="secondary"
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            mt: 2,
            display: "block",
            width: "200px",
            mx: "auto",
            textAlign: "center",
          }}
          // onClick={sendEmail}
        >
          Submit
        </Button>
        {status && (
          <Typography sx={{ mt: 2, textAlign: "center" }}>{status}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
