import React from 'react';
import { Project } from '../../../data/projects';

import PopUpHeader from './PopUpHeader';
import PopUpContent from './PopUpContent';

interface ProjectDetailProps {
  project: Project;
  closeProjectCB: () => void;
}

export default function ProjectDetailPopUp({ project, closeProjectCB }: ProjectDetailProps) {
  const pos = 'absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 w-1/3 h-1/2 overflow-auto';
  const alignment = 'flex flex-col justify-between';
  const texture = 'rounded-2xl bg-theme0';

  return (
    <div className={`${pos} ${texture} ${alignment}`}>
      <PopUpHeader projectName={project.projectName} closeProjectCB={closeProjectCB} />
      <PopUpContent project={project} />
    </div>
  );
}
