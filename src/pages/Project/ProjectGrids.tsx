import React from "react";
import {
  Grid,
} from "@mui/material";
import ProjectBriefing from "./ProjectBriefing";
import projects, { Project } from "../../data/projects";

export default function ProjectGrids(props: any) {
  const gridArr = projects.map((project: Project) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <ProjectBriefing project={project} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={{ xs: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      {gridArr}
    </Grid>
  );
}
