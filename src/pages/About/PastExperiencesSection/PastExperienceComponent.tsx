import React from 'react';
import { Experience } from '../../../data/experiences';
import KeyValueContent from '../../../components/KeyValueContent';

interface pastExperienceComponentProp {
  experience: Experience;
}

function addKeyValueContents(experience: Experience) {
  const contents = new Array<JSX.Element>();
  contents.push(<KeyValueContent styleClass={'pl-3'} fieldName={'Experience Type'} fieldValue={experience.type} />);
  contents.push(<KeyValueContent styleClass={'pl-3'} fieldName={'Starting Since'} fieldValue={experience.startDate} />);
  if (experience.endDate) {
    contents.push(<KeyValueContent styleClass={'pl-3'} fieldName={'Ending At'} fieldValue={experience.endDate} />);
  }
  return contents;
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
