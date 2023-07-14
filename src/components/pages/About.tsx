import React from 'react';

import RecommendationSection from './About/RecommendationSection';
import PastExperienceSection from './About/PastExperiencesSection';
import AboutMeSection from './About/AboutMeSection';
import OnGoingProjectsSection from './About/OnGoingProjectsSection';

export default function About(props: any) {
  return (
    <div className="bg-black">
      <AboutMeSection />
      <RecommendationSection />
      <OnGoingProjectsSection />
      <PastExperienceSection />
    </div>
  );
}
