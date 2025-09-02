import React from "react";
import { Grid, Typography, Box, Container, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";

const TeamSection = styled(Box)(({ theme }) => ({
  background: "var(--background-white)",
  padding: "80px 0",
  position: "relative",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  textAlign: "center",
  marginBottom: "20px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: "var(--gradient-primary)",
    borderRadius: "2px",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: "var(--text-secondary)",
  textAlign: "center",
  marginBottom: "60px",
  maxWidth: "600px",
  margin: "0 auto 60px auto",
  lineHeight: 1.6,
}));

const TeamCard = styled(Box)(({ theme }) => ({
  background: "var(--background-white)",
  borderRadius: "20px",
  padding: "40px 30px",
  textAlign: "center",
  boxShadow: "var(--shadow-md)",
  border: "1px solid var(--border-color)",
  transition: "all 0.3s ease",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "var(--gradient-primary)",
  },
  "&:nth-of-type(2n)::before": {
    background: "var(--gradient-secondary)",
  },
  "&:nth-of-type(3n)::before": {
    background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  },
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "var(--shadow-xl)",
    borderColor: "var(--primary-color)",
  },
}));

const RoleTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 600,
  color: "var(--text-primary)",
  marginBottom: "12px",
  lineHeight: 1.3,
}));

const RoleSubtitle = styled(Typography)(({ theme }) => ({
  color: "var(--text-secondary)",
  marginBottom: "30px",
  lineHeight: 1.6,
}));

const TeamAvatarsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap",
}));

const TeamAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  background: "var(--gradient-primary)",
  boxShadow: "var(--shadow-md)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "var(--shadow-lg)",
  },
}));

const teamRoles = [
  {
    title: "Chief Technology Officer",
    subtitle:
      "Leading technological innovation and strategic development across all platforms",
  },
  {
    title: "Chief Scientist",
    subtitle:
      "Driving research excellence and scientific breakthrough initiatives",
  },
  {
    title: "Applied Science Lead",
    subtitle:
      "Bridging cutting-edge research with practical industry applications",
  },
];

const Team = () => {
  return (
    <TeamSection>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Our Expert Team</SectionTitle>
        <SectionSubtitle variant="h6">
          Meet the brilliant minds behind our innovative solutions. Our diverse
          team of experts brings together decades of experience in technology,
          science, and industry leadership.
        </SectionSubtitle>

        <Grid container spacing={4} justifyContent="center">
          {teamRoles.map((role, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamCard>
                <RoleTitle variant="h5">{role.title}</RoleTitle>
                <RoleSubtitle variant="body1">{role.subtitle}</RoleSubtitle>
                <TeamAvatarsContainer>
                  {[...Array(3)].map((_, i) => (
                    <TeamAvatar key={i}>
                      <PersonIcon sx={{ color: "white", fontSize: 28 }} />
                    </TeamAvatar>
                  ))}
                </TeamAvatarsContainer>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TeamSection>
  );
};

export default Team;

// import React from "react";
// import { Grid, Typography, Box, Container, Avatar } from "@mui/material";

// // Sample team data
// const teamMembers = [
//   {
//     name: "Alice Smith",
//     position: "Chief Technology Officer (CTO)",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
//   {
//     name: "Bob Johnson",
//     position: "Chief Scientist (SC)",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
//   {
//     name: "Carol Williams",
//     position: "Applied Science Team Lead (AST)",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
//   {
//     name: "David Brown",
//     position: "Data Scientist",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
//   {
//     name: "Eva Davis",
//     position: "Machine Learning Engineer",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
//   {
//     name: "Frank Miller",
//     position: "Blockchain Specialist",
//     imgSrc: require("../assets/teammate2.jpeg"),
//   },
// ];

// const Team = () => {
//   return (
//     <Container>
//       <Box textAlign="center" mb={4}>
//         <Typography
//           variant="h4"
//           component="div"
//           color="black"
//           sx={{ fontWeight: "bold" }}
//         >
//           Our Amazing Team
//         </Typography>
//         <Typography sx={{ mt: 2, mb: 4 }}>
//           Empower informed decision-making with geospatial data, scalable remote
//           sensing, and a cloud-based computing platform for modeling, all driven
//           by AI-powered analytics and blockchain technology.
//         </Typography>
//       </Box>
//       <Grid container spacing={4} justifyContent="center">
//         {teamMembers.map((member, index) => (
//           <Grid item xs={12} sm={4} md={4} key={index}>
//             <Box textAlign="center">
//               <Avatar
//                 alt={member.name}
//                 src={member.imgSrc}
//                 sx={{
//                   width: 150,
//                   height: 150,
//                   borderRadius: "50%",
//                   margin: "0 auto",
//                 }}
//               />
//               <Typography
//                 variant="subtitle1"
//                 component="div"
//                 sx={{ mt: 2, fontWeight: "bold" }}
//               >
//                 {member.name}
//               </Typography>
//               <Typography variant="body2" component="div">
//                 {member.position}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Team;
