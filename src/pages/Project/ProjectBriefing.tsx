import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import projects, { Project } from "../../data/projects";


interface projectBriefingProps {
  project: Project;
}

export default function ProjectBriefing({ project }: projectBriefingProps) {

  let subtitle = `Start since ${project.startingDate}`;

  if (!project.onGoing) { // has an end date
    subtitle += ` | completed at ${project.endingDate}`;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {project.projectName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="body2">
          {project.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
