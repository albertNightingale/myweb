import React from 'react';
import { Experience } from '../../../data/experiences';
import KeyValueContent from '../../../components/KeyValueContent';

interface pastExperienceComponentProp {
  experience: Experience;
}

function addKeyValueContents(experience: Experience) {
  const contents = new Array<JSX.Element>();
  contents.push(<KeyValueContent inline={true} fieldName={'Experience Type'} fieldValue={experience.type} />);
  contents.push(<KeyValueContent inline={true} fieldName={'Starting Since'} fieldValue={experience.startDate} />);
  if (experience.endDate) {
    contents.push(<KeyValueContent inline={true} fieldName={'Ending At'} fieldValue={experience.endDate} />);
  }
  return contents;
}
export default function PastExperienceComponent({ experience }: pastExperienceComponentProp) {
  return (
    <div className="flex flex-col bg-amber-800 p-2 rounded-md">
      <h3 className="text-3xl text-sky-500">{experience.title}</h3>
      <h4 className="text-xl text-sky-300">@ {experience.orgName}</h4>
      {addKeyValueContents(experience)}
      <p className="text-base text-sky-500">{experience.description}</p>
    </div>
  );
}
