import React from 'react';
import { Experience } from '../../../../data/experiences';
import KeyValueContent from '../../../KeyValueContent';

interface pastExperienceComponentProp {
  experience: Experience;
}

function addKeyValueContents(experience: Experience) {
  const fieldMap = {
    startDate: 'Starting Since',
    type: 'Experience Type',
  } as any;
  if (experience.endDate) {
    fieldMap['endDate'] = 'Ending At';
  }

  return Object.entries(fieldMap).map(([key, value]) => {
    return (
      <KeyValueContent
        key={key}
        styleClass={'pl-3'}
        fieldName={value as string}
        fieldValue={experience[key as keyof Experience] as string}
      />
    );
  });
}
export default function PastExperienceComponent({ experience }: pastExperienceComponentProp) {
  return (
    <div className="flex flex-col bg-theme1 p-2 rounded-3xl">
      <h3 className="text-3xl pl-3">{experience.title}</h3>
      <h4 className="text-xl pl-3">@ {experience.orgName}</h4>
      {addKeyValueContents(experience)}
      <p className="pt-5 pl-3 text-base text-[#5A5A5A]">{experience.description}</p>
    </div>
  );
}
