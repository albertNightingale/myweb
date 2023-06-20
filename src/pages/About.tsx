import { Stack } from "@mui/material";
import React from "react";

import RecommendationSection from "./About/RecommendationSection";
import PastExperienceSection from "./About/PastExperience";
import AboutMeSection from "./About/AboutMeSection";
import OnGoingProjectsSection from "./About/OnGoingProjectsSection";

export default function About(props: any) {
  return (
    <Stack sx={{ backgroundColor: "black" }}>
      <AboutMeSection />
      <RecommendationSection />
      <OnGoingProjectsSection />
      <PastExperienceSection />
    </Stack>
  );
}
