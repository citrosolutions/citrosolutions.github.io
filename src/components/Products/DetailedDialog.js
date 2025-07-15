import React from "react";
import { Dialog, IconButton, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      sx={{ bgcolor: "#fff", color: "#000" }}
    >
      <Box
        sx={{
          position: "relative",
          padding: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>
        <h1>{title}</h1>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
        {image && (
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ marginTop: 2, maxHeight: 300, maxWidth: "100%" }}
          />
        )}
        <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
          {detailedInfo}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default DetailedDialog;
