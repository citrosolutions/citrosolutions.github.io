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
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="Solutions" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="products"
          smooth={true}
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="Products" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="deployments"
          smooth={true}
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="Deployments" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="About Us" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="team"
          smooth={true}
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="Team" />
        </ScrollLink>
      </ListItem>
      <ListItem className="list-item">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={300}
          className="navbar__link"
          onClick={toggleDrawer(false)}
          offset={-100}
        >
          <ListItemText primary="Contact" />
        </ScrollLink>
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          backdropFilter: "blur(20px)",
        }}
        className="navbar"
        position="fixed"
      >
        <Toolbar className="toolbar">
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
          <ScrollLink
            to="home"
            smooth={true}
            duration={300}
            className="navbar__link"
            offset={-100}
          >
            <h1 className="title">OeilSat</h1>
          </ScrollLink>
          {!isMobile && (
            <div className="header__Rightlinks">
              <ScrollLink
                to="solutions"
                smooth={true}
                duration={300}
                offset={-100}
              >
                <Button variant="text" className="header__links">
                  Solutions
                </Button>
              </ScrollLink>
              <ScrollLink
                to="products"
                smooth={true}
                duration={300}
                offset={-100}
              >
                <Button variant="text" className="header__links">
                  Products
                </Button>
              </ScrollLink>
              <ScrollLink
                to="deployments"
                smooth={true}
                duration={300}
                offset={-100}
              >
                <Button variant="text" className="header__links">
                  Deployments
                </Button>
              </ScrollLink>
              <ScrollLink
                to="about-us"
                smooth={true}
                duration={300}
                offset={-100}
              >
                <Button variant="text" className="header__links">
                  About Us
                </Button>
              </ScrollLink>
              <ScrollLink to="team" smooth={true} duration={300} offset={-100}>
                <Button variant="text" className="header__links">
                  Team
                </Button>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                offset={-100}
              >
                <Button variant="text" className="header__links">
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
        PaperProps={{
          sx: {
            width: "280px",
            backgroundColor: "#ffffff",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
          },
        }}
      >
        <div className="drawer-header">
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
