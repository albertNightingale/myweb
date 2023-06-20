import React from 'react';
import experiences, { Experience } from '../../../data/experiences';
import SectionTitle from '../../../components/SectionTitle';
import PastExperienceComponent from './PastExperienceComponent';

export default function PastExperienceSection() {
  const experiencesComponentList = experiences.map((experience: Experience) => {
    return <PastExperienceComponent experience={experience} />;
  });
  return (
    <div className="flex flex-col bg-orange-400">
      <SectionTitle sectionName="Past Experiences" />
      <div className="space-y-2 ">{experiencesComponentList}</div>
    </div>
  );
}
