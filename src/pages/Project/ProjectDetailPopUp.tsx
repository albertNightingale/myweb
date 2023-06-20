import React from 'react';
import { Project } from '../../data/projects';

interface ProjectDetailProps {
  project: Project;
  closeProjectCB: () => void;
}

export default function ProjectDetailPopUp({ project, closeProjectCB }: ProjectDetailProps) {
  const header = (
    <div className="flex flex-row justify-between bg-indigo-700/60 border-b-2 border-sky-400 text-xl text-center">
      <div className="">{project.projectName}</div>
      <div className="bg-indigo-700/30">
        <button onClick={() => closeProjectCB()}>Close Detail</button>
      </div>
    </div>
  );

  const content = (
    <div className="flex flex-col">
      <div className="text-base text-neutral-500">{'subtitle goes here'}</div>
      <div className="text-sm">{project.description}</div>
    </div>
  );

  const pos = 'absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2';
  const dim = 'w-1/2 h-3/4';
  const texture = 'bg-indigo-400 shadow-xl shadow-indigo-400/100';
  const font = 'font-mono';

  return (
    <div className={`${pos} ${dim} overflow-auto ${texture} ${font}`}>
      {header}
      {content}
    </div>
  );
}
