import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import RecommendationCard from "../components/Recommendation";
import recommendationList, { Recommendation } from "../data/recommendations";

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
        <img src="./img/profile.JPG" alt="Flowers in Chania" width="25%" />
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

  render() {
    return (
      <Stack sx={{ backgroundColor: "black" }}>
        {this.aboutMeSection()}
        {this.recommendationSection()}
      </Stack>
    );
  }
}

export default About;
