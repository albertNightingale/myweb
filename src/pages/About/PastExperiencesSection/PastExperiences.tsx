import React from 'react';
import experiences, { Experience } from '../../../data/experiences';
import SectionTitle from '../../../components/SectionTitle';
import PastExperienceComponent from './PastExperienceComponent';

export default function PastExperienceSection() {
  const experiencesComponentList = experiences.map((experience: Experience) => {
    return <PastExperienceComponent experience={experience} />;
  });
  return (
    <div className="flex flex-col bg-theme0 pb-10">
      <SectionTitle sectionName="Past Experiences" />
      <div className="grid grid-cols-2 gap-5 px-3">{experiencesComponentList}</div>
    </div>
  );
}
