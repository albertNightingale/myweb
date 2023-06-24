import React from 'react';
import { Project } from '../../../data/projects';

interface ProjectButtonProps {
  project: Project;
  projectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
}

function onClickProject(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  project: Project,
  projectSetter: React.Dispatch<React.SetStateAction<null | Project>>
) {
  projectSetter(project);
}

export default function ProjectButton({ project, projectSetter }: ProjectButtonProps) {
  return (
    <div className="border-t-4 mt-auto flex flex-row">
      <button
        className="hover:bg-indigo-500/50 basis-1/2 text-center"
        onClick={(event) => {
          onClickProject(event, project, projectSetter);
        }}
      >
        Project Detail
      </button>
    </div>
  );
}
