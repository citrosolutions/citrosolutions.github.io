import React from "react";
import "./HomeStyles.css";
import Solutions from "../Solutions/Solutions";
import Products from "../Products/Products";
import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div id="home">
      <div className="home-container">
        <div className="home-text">
          <h2>OEILSAT MISSION</h2>
          <p>
            <span className="key-sentence">
              Innovative Solutions, Unmatched Results
            </span>
          </p>
        </div>
        <div className="home-image">
          <img src={require("../assets/main.png")} className="home-image" />
        </div>
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
