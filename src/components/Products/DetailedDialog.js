import React from "react";
import {
  Dialog,
  IconButton,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const DialogContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
}));

const DialogHeader = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  padding: "60px 0",
  position: "relative",
  borderRadius: 0,
  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderTop: "20px solid #764ba2",
  },
}));

const DialogContent = styled(Container)(({ theme }) => ({
  flex: 1,
  padding: "60px 0",
  maxWidth: "800px !important",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: "30px",
  right: "30px",
  background: "rgba(255, 255, 255, 0.9)",
  color: "#667eea",
  width: "56px",
  height: "56px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  zIndex: 1000,
  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
    transform: "scale(1.1)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  height: "350px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  marginBottom: "40px",
}));

const ContentCard = styled(Paper)(({ theme }) => ({
  background: "white",
  borderRadius: "24px",
  padding: "50px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
  border: "1px solid #e2e8f0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "2px 0 0 2px",
  },
}));

const DetailedDialog = ({
  open,
  onClose,
  title,
  description,
  detailedInfo,
  image,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          background: "transparent",
          margin: 0,
          maxWidth: "none",
          maxHeight: "none",
        },
      }}
    >
      <DialogContainer>
        <CloseButton onClick={onClose} aria-label="Close dialog">
          <CloseIcon fontSize="large" />
        </CloseButton>

        <DialogHeader elevation={3}>
          <Container
            maxWidth="md"
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                marginBottom: "24px",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                opacity: 0.9,
                fontWeight: 400,
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.5,
              }}
            >
              {description}
            </Typography>
          </Container>
        </DialogHeader>

        <DialogContent>
          {image && (
            <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
              <ProductImage src={image} alt={title} />
            </Box>
          )}

          <ContentCard elevation={0}>
            <Typography
              variant="h4"
              sx={{
                color: "#1f2937",
                fontWeight: 700,
                marginBottom: "30px",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
              }}
            >
              Overview
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.125rem" },
                "& p": {
                  marginBottom: "24px",
                },
              }}
            >
              {detailedInfo?.split("\n\n").map((paragraph, index) => (
                <Box
                  key={index}
                  component="p"
                  sx={{
                    marginBottom: "24px",
                    "&:last-child": { marginBottom: 0 },
                  }}
                >
                  {paragraph.trim()}
                </Box>
              ))}
            </Typography>
          </ContentCard>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
};

export default DetailedDialog;
