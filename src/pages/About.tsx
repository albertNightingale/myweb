import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import RecommendationCard from "./About/Recommendation";

import recommendationList, { Recommendation } from "../data/recommendations";
import projects, { Project } from "../data/projects";
import experiences, { Experience } from "../data/experiences";
import SectionTitle from "../components/SectionTitle";
import PastExperience from "./About/PastExperience";
import AboutMe from "./About/AboutMe";
import OnGoingProjects from "./About/OnGoingProjects";

class About extends React.Component {
  recommendationSection = () => {
    const recommandationComponents = recommendationList.map(
      (rec: Recommendation) => {
        return <RecommendationCard recommendation={rec} />;
      }
    );

    return (
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Recommendations
          </Typography>
        </Grid>
        {recommandationComponents}
      </Grid>
    );
  };

  render() {
    return (
      <Stack sx={{ backgroundColor: "black" }}>
        <AboutMe />
        {this.recommendationSection()}
        <OnGoingProjects />
        <PastExperience />
      </Stack>
    );
  }
}

export default About;
