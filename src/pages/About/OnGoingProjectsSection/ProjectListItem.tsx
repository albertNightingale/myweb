import { Link } from "react-router-dom";
import projects, { Project as ProjectType } from "../../../data/projects";

interface onGoingProjectProps {
  project: ProjectType;
  children?: React.ReactNode; // best, accepts everything React can render
}

export default function ProjectListItem({ project }: onGoingProjectProps) {
  const links = [];
  if (project.github) {
    links.push(
      <button className="text-theme px-2 inline">
        <Link to={project.github}>Github</Link>
      </button>
    );
  }
  if (project.website) {
    links.push(
      <button className="text-theme px-2 inline">
        <Link to={project.website}>Website</Link>
      </button>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="text-theme inline">{project.projectName}</div>
      <div className="flex">
      {links}
      </div>
    </div>
  );
}