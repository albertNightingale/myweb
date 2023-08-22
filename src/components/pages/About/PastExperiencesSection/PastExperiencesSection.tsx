import React from 'react';
import SectionTitle from '../../../SectionTitle';
import PastExperienceComponent from './PastExperienceComponent';
import { usePastExperiences } from '../../../../apihooks';
import { PastExperience } from "../../../../types"  

function mapPastExperiences(experiences: PastExperience[]) {
  const experiencesComponentList = experiences.map((experience: PastExperience) => {
    return <PastExperienceComponent key={`${experience.position}@${experience.orgName}`} experience={experience} />;
  });
  return experiencesComponentList;
}

export default function PastExperienceSection() {

  const { data, error, isLoading } = usePastExperiences();
  const loadingComponent = isLoading ? <div>Loading...</div> : <></>;
  const errorComponent = error ? <div>Error: {error.toString()}</div> : <></>;

  return (
    <div className="flex flex-col bg-theme0 pb-10">
      <SectionTitle sectionName="Past Experiences" />
      {loadingComponent}
      {errorComponent}
      {data && 
      <div className="grid grid-cols-2 gap-5 px-3">{mapPastExperiences(data)}</div>
      }
    </div>
  );
}
