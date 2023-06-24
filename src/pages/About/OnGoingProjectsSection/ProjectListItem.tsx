import { Link } from 'react-router-dom';
import projects, { Project as ProjectType } from '../../../data/projects';

interface onGoingProjectProps {
  project: ProjectType | null;
  children?: React.ReactNode; // best, accepts everything React can render
}

export default function ProjectListItem({ project }: onGoingProjectProps) {
  return (
    <div className="bg-theme0 rounded-3xl">
      <div className="font-semibold text-texttheme text-center pt-2 pb-5">
        {project ? project.projectName : 'Coming Soon...'}
      </div>
      <div className="w-full flex flex-row justify-around">
        {project && project.github && (
          <button className="text-texttheme px-2 inline">
            <Link to={project.github}>Github</Link>
          </button>
        )}
        {project && project.website && (
          <button className="text-texttheme px-2 inline">
            <a href={project.website}>Website</a>
          </button>
        )}
      </div>
    </div>
  );
}
