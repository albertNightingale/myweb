import React from 'react';
import ProjectBriefing from './ProjectBriefing';
import useProjects from '../../apihooks/useProjects';
import { Project } from '../../types';

export default function ProjectGrids({
  popUpProjectSetter,
}: {
  popUpProjectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
}) {
  const { data, error, isLoading } = useProjects();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const grids = (data as any).map((project: Project) => {
    return <ProjectBriefing key={`${project.projectName}`} project={project} projectSetter={popUpProjectSetter} />;
  });

  return <div className="grid grid-cols-3 gap-4 px-5 pt-4">{grids}</div>;
}
