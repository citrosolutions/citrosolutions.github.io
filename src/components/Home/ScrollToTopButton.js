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
        bottom: "80px",
        right: "20px",
        display: isVisible ? "block" : "none",
      }}
    >
      <IconButton
        onClick={scrollToTop}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default ScrollToTopButton;
