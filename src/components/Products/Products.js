import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import DetailedDialog from "./DetailedDialog";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#000",
  height: "100%",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const CardMediaWrapper = styled(CardMedia)(({ theme }) => ({
  height: 200,
  filter: "brightness(1) grayscale(0%)",
  transition: "filter 0.3s ease-in-out",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const ProductContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(90deg, #46caca, #a41c9d)",
  // background: "#5e1564",
  color: "#fff",
  padding: theme.spacing(4),
}));

const products = [
  {
    title: "Real-time Flood Mapping",
    description: "Flood Preparedness, Flood Relief Agencies",
    image: require("../assets/skynews-sukkur-pakistan-after_5881512.png"),
    url: "https://riverreaches-app-dac1d9e843c0.herokuapp.com/",
  },
  {
    title: "Machine Learning Platform",
    description: "Generating Millions of Training Data",
    image: require("../assets/machine_learning.png"),
    detailedInfo: `
      Our experts in applied science, solutions management, and engineering amplify your data science capability. Custom services: Historically, business intelligence has taken an inward-looking approach. While the tools of yesterday were focused on internal data, the challenge today is accurately modeling your external environment. By combining our global sensor data with your internal data, our professional services team delivers actionable insight in the form of a complete operational solution. We focus on bringing scientific integrity and technical rigor to every project and measure our success by the value you realize from our work. Optimizing for customer success, we bring your needs and goals into our development process to ensure continuous improvement and ROI. Through each engagement, we help you better understand your relationship with the physical world.`,
  },
  {
    title: "Block Chain Tech and NLP",
    description: "Unlocking the Potential of Blockchain",
    image: require("../assets/nlp_Platform.png"),
    detailedInfo: `
      Web 3, the next iteration of the internet, harnesses the power of decentralized technologies such as blockchain to revolutionize various industries, including Natural Language Processing (NLP). With Web 3, NLP algorithms can operate on decentralized networks, enabling secure, transparent, and tamper-proof processing of natural language data. By leveraging blockchain's immutable ledger, NLP applications can ensure data integrity and authenticity, enhancing trust in automated language processing tasks such as sentiment analysis, language translation, and text summarization.
      
      Blockchain technology provides a decentralized infrastructure for storing and accessing real estate title records and land registration information. Traditionally, managing these records involves cumbersome paperwork and centralized databases prone to errors and fraud. However, by utilizing blockchain's distributed ledger, real estate transactions can be recorded securely and transparently. Each transaction is cryptographically sealed, timestamped, and stored across a network of nodes, ensuring the integrity and immutability of title records. This decentralized approach enhances trust among stakeholders, streamlines the transfer of property ownership, and reduces the risk of disputes.
      
      Smart contracts, a key feature of blockchain technology, facilitate automated and self-executing agreements without the need for intermediaries. In the context of real estate title records and land registration, smart contracts can automate various tasks, such as verifying ownership, executing transactions, and transferring property titles. These contracts are programmed to execute predefined conditions automatically, ensuring a transparent and efficient process. By eliminating the need for intermediaries, smart contracts reduce costs, minimize delays, and enhance the overall efficiency of real estate transactions.
      
      Blockchain-powered land registries offer unparalleled transparency and security, especially in regions with weak governance or high levels of corruption. By decentralizing the storage and management of land records, blockchain mitigates the risk of data manipulation and fraudulent activities. Additionally, blockchain-based registries enable real-time access to land ownership information, facilitating faster and more accurate property transactions. This transparency not only fosters trust among buyers and sellers but also attracts investment and stimulates economic growth in emerging markets.
    `,
  },
  {
    title: "Data Platforms",
    description: "Advanced data platforms for seamless ML integration",
    image: require("../assets/mountains_image.png"),
    detailedInfo: `Onboarding & Training:
A structured program that provides a foundational understanding of our platform so you can get the most out of our datasets, APIs, and interfaces.

Data Science Consulting: Connect with our science and engineering experts to assess model feasibility, leverage internal and external datasets, and deliver proof-of-concept examples.`,
  },
  {
    title: "Flood Prediction",
    description: "Communities At Risk, Insurance Industry",
    image: require("../assets/Congo_basin_Sentinel_sar_1.png"),
    url: "https://zallua.com/discharge/CongoDailyData.html",
    //     detailedInfo: `Data Science Consulting: Connect with our science and engineering experts to assess model feasibility, leverage internal and external datasets, and deliver proof-of-concept examples.

    // Custom Solutions:
    // Implement a fully operational solution that incorporates your specific requirements and leverages our platform, data, and science & engineering expertise.`,
  },
  {
    title: "Seasonal Weather Derivatives",
    description: "Energy Market",
    image: require("../assets/forest_image.png"),
    detailedInfo: `Unleash the potential of our machine learning and remote sensing data platform to provide a near real-time global flood database, a market place for seasonal weather derivatives (HDD/CDD), and seasonal yield forecasts for agriculture, including corn, soybean, and wheat.

Enable informed decision-making using geospatial data, scalable remote sensing, and a cloud-based computing platform for modeling, all powered by AI-enabled analytics.`,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleTileClick = (product) => {
    if (product.url) {
      window.open(product.url, "_blank");
    } else {
      setCurrentProduct(product);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduct(null);
  };

  return (
    <ProductContainer>
      <h1 align="center">Products</h1>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <CardWrapper onClick={() => handleTileClick(product)}>
              <CardMediaWrapper
                component="img"
                image={product.image}
                alt={product.title}
              />
              <CardContentWrapper>
                <Typography variant="h7" component="h3" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {product.description}
                </Typography>
              </CardContentWrapper>
            </CardWrapper>
          </Grid>
        ))}
      </Grid>

      {/* Modal for details */}
      {currentProduct && (
        <DetailedDialog
          open={open}
          onClose={handleClose}
          title={currentProduct.title}
          image={currentProduct.image}
          description={currentProduct.description}
          detailedInfo={currentProduct.detailedInfo}
        />
      )}
    </ProductContainer>
  );
};

export default Products;
