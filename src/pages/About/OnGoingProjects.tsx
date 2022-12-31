import React from "react";

import projects, { Project as ProjectType } from "../../data/projects";

import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";

interface onGoingProjectProps {
  project: ProjectType;
  children?: React.ReactNode; // best, accepts everything React can render
}

function ProjectListItem({ project, children }: onGoingProjectProps) {
  const links = [];
  if (project.github) {
    links.push(
      <button className="text-sky-300 px-2 inline">
        <Link to={project.github}>Github</Link>
      </button>
    );
  }
  if (project.website) {
    links.push(
      <button className="text-sky-300 px-2 inline">
        <Link to={project.website}>Website</Link>
      </button>
    );
  }

  return (
    <div>
      <div className="text-red-500 inline">{project.projectName}</div>
      {links}
    </div>
  );
}

function mapOnGoingProjects() {
  const projectLists = projects
    .filter((proj: ProjectType) => proj.onGoing)
    .map((proj: ProjectType) => {
      const links: JSX.Element[] = [];

      const projectItem = (
        <ProjectListItem project={proj}>{links}</ProjectListItem>
      );
      return projectItem;
    });

  return projectLists;
}

export default function OnGoingProjectsSection(props: any) {
  const onGoingProjectComponent = mapOnGoingProjects();
  return (
    <div className="flex flex-col">
      <SectionTitle sectionName="On Going Projects" />
      {onGoingProjectComponent}
    </div>
  );
}
