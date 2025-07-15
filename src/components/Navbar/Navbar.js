import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./NarbarStyles.css";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:680px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = () => (
    <List>
      <ListItem className="list-item">
        <ScrollLink
          to="solutions"
          smooth={true}
          duration={500}
          className="navbar__link"
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Solutions" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="products"
          smooth={true}
          duration={500}
          className="navbar__link"
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Products" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          className="navbar__link"
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="About Us" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="team"
          smooth={true}
          duration={500}
          className="navbar__link"
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Team" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="navbar__link"
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary="Contact" />
        </ScrollLink>
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar
        sx={{ backgroundColor: "#fff", boxShadow: "none" }}
        className="navbar"
        position="static"
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
          )}
          <ScrollLink to="/" className="navbar__link">
            <p className="title">OeilSat</p>
          </ScrollLink>
          {!isMobile && (
            <div className="header__Rightlinks">
              <ScrollLink to="solutions" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="header__links"
                  style={{ width: "125px", color: "black" }}
                >
                  Solutions
                </Button>
              </ScrollLink>
              <ScrollLink to="products" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="header__links"
                  style={{ width: "130px", color: "black" }}
                >
                  Products
                </Button>
              </ScrollLink>
              <ScrollLink to="about-us" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="header__links"
                  style={{ width: "110px", color: "black" }}
                >
                  About Us
                </Button>
              </ScrollLink>
              <ScrollLink to="team" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="header__links"
                  style={{ width: "100px", color: "black" }}
                >
                  Team
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="header__links"
                  style={{ width: "100px", color: "black" }}
                >
                  Contact
                </Button>
              </ScrollLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: "240px" } }}
      >
        <div>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(false)}
            aria-label="close drawer"
          >
            <ClearIcon />
          </IconButton>
        </div>
        {list()}
      </Drawer>
    </div>
  );
}
