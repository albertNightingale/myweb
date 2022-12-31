import React from "react";
import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function AboutMe(props: any) {
  return (
    <Box sx={{ display: "flex" }}>
      <img src="./img/profile.JPG" alt="profile" width="25%" />
      <Card sx={{ backgroundColor: "violet", width: "75%" }}>
        <CardHeader
          title={<Typography sx={{ fontSize: "100px" }}>Albert Liu</Typography>}
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
}
