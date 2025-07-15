import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExpandIcon from "@mui/icons-material/Expand";
import StarIcon from "@mui/icons-material/Star";

export default function TimeLine() {
  const timelineData = [
    {
      time: "2000-2020",
      title: "Our Humble Beginnings",
      description: "Hard work since 2000",
      icon: <WorkIcon />,
    },
    {
      time: "May 2020",
      title: "An Agency was Born",
      description: "Ready to provide solution and community-based workflows",
      icon: <BusinessIcon />,
    },
    {
      time: "December 2020",
      title: "Transition to Full Service",
      description: "Real-time flood mapping and energy solutions",
      icon: <TrendingUpIcon />,
    },
    {
      time: "May 2021",
      title: "Phase Two Expansion",
      description: "New financial model for phase two expansions",
      icon: <ExpandIcon />,
    },
    {
      time: "Be Part Of Our Story!",
      title: "The Future",
      description: "",
      icon: <StarIcon />,
    },
  ];

  return (
    <Timeline position="alternate">
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
