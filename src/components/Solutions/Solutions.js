import React from "react";
import "./SolutionsStyles.css";
import { Typography } from "@mui/material";

const solutions = [
  {
    title: "Real-time Flood Mapping",
    description:
      "Near real-time flood mapping is performed using data from satellites such as Sentinel-1, Sentinel-2, Landsat, and PlanetScope. This method allows for the timely monitoring and mapping of floods, enabling early detection and response efforts.",
    icon: "🛰️",
  },
  {
    title: "Machine Learning Platform",
    description:
      "Using Google Cloud's scalable processors, we can efficiently process years of Sentinel-1 satellite imagery dating back to 2015. This capability allows for precise flood prediction and early detection, providing valuable benefits to communities, businesses, and governments.",
    icon: "🤖",
  },
  {
    title: "BlockChain & NLP Platform",
    description:
      "Web 3 and blockchain technology offer significant potential to revolutionize natural language processing and real estate transactions. By using decentralized networks, immutable ledgers, and smart contracts, they can boost trust, transparency, and efficiency.",
    icon: "⛓️",
  },
];

export default function Solutions() {
  return (
    <div className="solutions-background">
      <div className="solutions-header">
        <h1>Solutions</h1>
        <Typography
          variant="h6"
          component="p"
          align="center"
          className="solutions-subtitle"
        >
          Gain operational advantage with geospatial analytics
        </Typography>
      </div>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div key={index} className="tile">
            <div className="tile-content">
              <div className="tile-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
