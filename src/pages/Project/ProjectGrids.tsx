import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function ProjectBriefing(props: any) {
  const { project } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {project}
        </Typography>
        <Typography variant="h5" component="div">
          hi
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          look
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectGrids(props: any) {
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

  return (
    <Grid container spacing={{ xs: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      {gridArr}
    </Grid>
  );
}
