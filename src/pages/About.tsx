import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import RecommendationCard from "../components/Recommendation";

import recommendationList, { Recommendation } from "../data/recommendations";
import projects, { Project } from "../data/projects";
import experiences, { Experience } from "../data/experiences";

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

  aboutMeSection = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <img src="./img/profile.JPG" alt="profile" width="25%" />
        <Card sx={{ backgroundColor: "violet", width: "75%" }}>
          <CardHeader
            title={
              <Typography sx={{ fontSize: "100px" }}>Albert Liu</Typography>
            }
            subheader={
              <Typography sx={{ fontSize: "20px" }}>
                CS New Grad from University of Utah
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: "white" }}>
              some stuff goes here.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  onGoingProjectSections = () => {
    const projectLists = projects
      .filter((proj: Project) => proj.onGoing)
      .map((proj: Project) => {
        const links: JSX.Element[] = [];

        if (proj.github) {
          links.push(<Link href={proj.github}>Github</Link>);
        }
        if (proj.website) {
          links.push(<Link href={proj.website}>Website</Link>);
        }

        const projectItem = (
          <ListItem component="div" disablePadding>
            <ListItemText>{proj.projectName}</ListItemText>
            {links}
          </ListItem>
        );

        return projectItem;
      });

    return (
      <Box>
        <Typography variant="h4" sx={{ color: "white" }}>
          On Going Projects
        </Typography>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {projectLists}
          </List>
        </Box>
      </Box>
    );
  };

  pastExperiencesSections = () => {
    const experienceComponents = experiences.map((experience: Experience) => {
      return;
    });
  };

  render() {
    return (
      <Stack sx={{ backgroundColor: "black" }}>
        {this.aboutMeSection()}
        {this.recommendationSection()}
        {this.onGoingProjectSections()}
      </Stack>
    );
  }
}

export default About;
