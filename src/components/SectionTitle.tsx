import React from "react";
import { Box, Grid, Typography } from "@mui/material";

type sectionTitleProp = { sectionName: string };
export default function SectionTitle({ sectionName }: sectionTitleProp) {
  return (
    <Grid
      container
      spacing={{ xs: 3, sm: 3, md: 3 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4" sx={{ color: "white" }}>
          {sectionName}
        </Typography>
      </Grid>
    </Grid>
  );
}
