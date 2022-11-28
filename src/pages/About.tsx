import { Stack } from "@mui/material";
import React from "react";

import RecommendationSection from "./About/Recommendation";
import PastExperienceSection from "./About/PastExperience";
import AboutMeSection from "./About/AboutMe";
import OnGoingProjectsSection from "./About/OnGoingProjects";

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
