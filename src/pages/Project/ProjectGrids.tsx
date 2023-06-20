import React from 'react';
import projects, { Project } from '../../data/projects';
import { Link } from 'react-router-dom';

function onClickProject(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  project: Project,
  projectSetter: React.Dispatch<React.SetStateAction<null | Project>>
) {
  projectSetter(project);
  console.log(event);
}

type ProjectProps = {
  projectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
  project: Project;
};

function ProjectBriefing({ projectSetter, project }: ProjectProps) {
  let subtitle = `Start since ${project.startingDate}`;

  if (!project.onGoing) {
    // has an end date
    subtitle += ` | Done by ${project.endingDate}`;
  }

  // process descriptions, stop it after 200 characters
  let description = project.description;
  if (project.description.length > 200) {
    description = project.description.slice(0, 200) + '...';
  }

  return (
    <div className="flex flex-col bg-indigo-500/30 shadow-xl shadow-indigo-500/100 font-mono">
      <div className="text-xl">{project.projectName}</div>
      <div className="text-base text-neutral-500">{subtitle}</div>
      <div className="text-sm">{description}</div>
      <div className="border-t-4 mt-auto flex flex-row">
        <Link className="hover:bg-indigo-500/50 basis-1/2 text-center" to={''}>
          Project Website
        </Link>
        <button
          className="hover:bg-indigo-500/50 basis-1/2 text-center"
          onClick={(event) => {
            onClickProject(event, project, projectSetter);
          }}
        >
          Project Detail
        </button>
      </div>
    </div>
  );
}

export default function ProjectGrids({
  popUpProjectSetter,
}: {
  popUpProjectSetter: React.Dispatch<React.SetStateAction<null | Project>>;
}) {
  const grids = projects.map((project: Project) => {
    return <ProjectBriefing key={`${project.projectName}`} project={project} projectSetter={popUpProjectSetter} />;
  });

  return <div className="grid grid-cols-2 gap-4">{grids}</div>;
}
