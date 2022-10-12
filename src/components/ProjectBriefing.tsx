import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import React from "react";

export function ProjectBriefing(props: any) {
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
