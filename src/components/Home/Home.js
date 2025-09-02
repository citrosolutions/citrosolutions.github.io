import React from "react";
import "./HomeStyles.css";
import Solutions from "../Solutions/Solutions";
import Products from "../Products/Products";
import Deployments from "../Deployments/Deployments";
import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h2>OEILSAT MISSION</h2>
            <p className="key-sentence">
              Innovative Solutions, Unmatched Results
            </p>
            <p className="home-subtitle">
              Transforming industries through cutting-edge technology and
              data-driven insights. We deliver professional solutions that drive
              real business value and sustainable growth.
            </p>

            {/* Added spacing element to push buttons down */}
            <div className="cta-spacer"></div>

            <div className="cta-buttons">
              <a href="#solutions" className="cta-primary">
                Explore Solutions
              </a>
              <a href="#contact" className="cta-secondary">
                Get Started
              </a>
            </div>
          </div>
          <div className="home-image-container">
            <img
              src={require("../assets/main.png")}
              className="home-image"
              alt="OeilSat Innovative Technology Solutions"
            />
          </div>
        </div>

        {/* Features section with better separation */}
        <div className="features-highlight">
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h3>Innovation</h3>
            <p>
              Cutting-edge technology solutions that drive transformation and
              create competitive advantages
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>
              Data-driven insights and intelligence that enable smarter, more
              informed business decisions
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Results</h3>
            <p>
              Measurable outcomes and proven success that fuel sustainable
              growth and long-term value
            </p>
          </div>
        </div>
      </div>

      <section id="solutions" className="section section-light">
        <Solutions />
      </section>

      <section id="products" className="section section-white">
        <Products />
      </section>

      <section id="deployments" className="section section-light">
        <Deployments />
      </section>

      <section id="about-us" className="section section-white">
        <AboutUs />
      </section>

      <section id="team" className="section section-white">
        <Team />
      </section>

      <section id="contact" className="section section-light">
        <Contact />
      </section>
    </div>
  );
}
