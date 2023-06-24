import React from 'react';
import projects, { Project } from '../../data/projects';
import ProjectBriefing from './ProjectBriefing';

export default function ProjectGrids({
  popUpProjectSetter,
}: {
  popUpProjectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
}) {
  const grids = projects.map((project: Project) => {
    return <ProjectBriefing key={`${project.projectName}`} project={project} projectSetter={popUpProjectSetter} />;
  });

  return <div className="grid grid-cols-3 gap-4 px-5 pt-4">{grids}</div>;
}
