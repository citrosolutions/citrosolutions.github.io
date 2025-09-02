import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        display: isVisible ? "block" : "none",
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={scrollToTop}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
            transform: "translateY(-3px)",
            boxShadow: "0 12px 35px rgba(102, 126, 234, 0.6)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default ScrollToTopButton;
