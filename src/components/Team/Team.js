import React from "react";
import { Grid, Typography, Box, Container, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const teamRoles = [
  {
    title: "Chief Technology Officer",
    subtitle: "We innovate new Technologies",
  },
  {
    title: "Chief Scientist",
    subtitle: "Scientific innovation",
  },
  {
    title: "Applied Science Lead",
    subtitle: "Lead Developer",
  },
];

const Team = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            component="div"
            color="black"
            sx={{ fontWeight: "bold" }}
          >
            Our Amazing Team
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {teamRoles.map((role, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {role.title}
                </Typography>
                <Typography variant="body2" component="div" sx={{ mt: 1 }}>
                  {role.subtitle}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  {[...Array(3)].map((_, i) => (
                    <Avatar
                      key={i}
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#a41c9d",
                        marginX: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PersonIcon sx={{ color: "white" }} />{" "}
                      {/* Profile icon */}
                    </Avatar>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
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
