import { Grid } from "@mui/material";
import React from "react";

import { ProjectBriefing } from "../components/ProjectBriefing";

class Project extends React.Component {
  getGrid() {
    const projectList = [
      "tank war",
      "nightingale-ai",
      "portfolio",
      "LoneLand",
      "mailchimpUploader",
    ];

    const gridArr = projectList.map((project) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <ProjectBriefing project={project} />
        </Grid>
      );
    });

    return gridArr;
  }

  render() {
    return (
      <Grid container spacing={{ xs: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {this.getGrid()}
      </Grid>
    );
  }
}

export default Project;
