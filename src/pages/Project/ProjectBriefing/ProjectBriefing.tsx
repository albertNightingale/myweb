import React from 'react';
import ProjectSubtitle from './ProjectSubtitle';
import ProjectDescription from './ProjectDescription';
import ProjectButton from './ProjectButtons';
import { Project } from '../../../types';

type ProjectProps = {
  projectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
  project: Project;
};

export default function ProjectBriefing({ projectSetter, project }: ProjectProps) {
  return (
    <div className="flex flex-col bg-theme1 rounded-2xl">
      <div className="flex flex-col pl-2 py-3">
        <div className="text-xl mt-6 mb-2">{project.projectName}</div>
        <ProjectSubtitle start={project.startingDate} end={project.endingDate} onGoing={project.onGoing} />
        <ProjectDescription description={project.description} />
      </div>
      <ProjectButton project={project} projectSetter={projectSetter} />
    </div>
  );
}
