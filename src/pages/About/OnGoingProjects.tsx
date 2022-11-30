import React from "react";
import { Box, Link, List, ListItem, ListItemText } from "@mui/material";

import projects, { Project as ProjectType } from "../../data/projects";

import SectionTitle from "../../components/SectionTitle";


interface onGoingProjectProps {
  project: ProjectType;
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
}

function ProjectListItem({
  project,
  children,
}: onGoingProjectProps) {
  return (
    <ListItem component="div" disablePadding>
      <ListItemText>{project.projectName}</ListItemText>
      {children}
    </ListItem>
  );
}


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
        <ProjectListItem project={proj}>{links}</ProjectListItem>
      );
      return projectItem;
    });

  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {projectLists}
      </List>
    </Box>
  );
}

export default function OnGoingProjectsSection(props: any) {
  const onGoingProjectComponent = mapOnGoingProjects();
  return (
    <Box>
      <SectionTitle sectionName="On Going Projects" />
      {onGoingProjectComponent}
    </Box>
  );
}
