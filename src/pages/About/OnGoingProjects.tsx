import React from "react";
import {
  Box,
  Link,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";

import projects, { Project as ProjectType } from "../../data/projects";
import ProjectComponent from "../../components/Project";

function mapOnGoingProjects() {
  const projectLists = projects
    .filter((proj: ProjectType) => proj.onGoing)
    .map((proj: ProjectType) => {
      const links: JSX.Element[] = [];

      if (proj.github) {
        links.push(<Link href={proj.github}>Github</Link>);
      }
      if (proj.website) {
        links.push(<Link href={proj.website}>Website</Link>);
      }

      const projectItem = (
        <ProjectComponent project={proj}>{links}</ProjectComponent>
      );

      return projectItem;
    });

  return projectLists;
}

export default function OnGoingProjects(prop: any) {
  const projectLists = mapOnGoingProjects();
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
}
