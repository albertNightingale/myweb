import React from 'react';
import { Project } from '../../../data/projects';

export default function ProjectDetailPopUp({ project }: { project: Project }) {
  return (
    <div className="basis-11/12 bg-white mx-2 my-2 rounded-2xl">
      <div className="text-sm pl-1 pt-1">{project.description}</div>
    </div>
  );
}
