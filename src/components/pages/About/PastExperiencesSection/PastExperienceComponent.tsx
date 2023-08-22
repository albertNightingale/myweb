import React from 'react';
import KeyValueContent from '../../../KeyValueContent';
import { PastExperience } from '../../../../types';

interface pastExperienceComponentProp {
  experience: PastExperience;
}

function addKeyValueContents(experience: PastExperience) {
  const fieldMap = {
    startDate: 'Starting Since',
    type: 'Experience Type',
  } as any;
  if (experience) {
    fieldMap['endDate'] = 'Ending At';
  }

  return Object.entries(fieldMap).map(([key, value]) => {
    return (
      <KeyValueContent
        key={key}
        styleClass={'pl-3'}
        fieldName={value as string}
        fieldValue={experience[key as keyof PastExperience] as string}
      />
    );
  });
}

export default function PastExperienceComponent({ experience }: pastExperienceComponentProp) {
  return (
    <div className="flex flex-col bg-theme1 p-2 rounded-3xl">
      <h3 className="text-3xl pl-3">{experience.position}</h3>
      <h4 className="text-xl pl-3">@ {experience.orgName}</h4>
      {addKeyValueContents(experience)}
      <p className="pt-5 pl-3 text-base text-[#5A5A5A]">{experience.description}</p>
    </div>
  );
}
