import React from "react";

import projects, { Project as ProjectType } from "../../../data/projects";

import SectionTitle from "../../../components/SectionTitle";
import ProjectListItem from "./ProjectListItem";

function mapOnGoingProjects() {
  const projectLists = projects
    .filter((proj: ProjectType) => proj.onGoing)
    .map((proj: ProjectType) => {
      const projectItem = (
        <ProjectListItem project={proj}></ProjectListItem>
      );
      return projectItem;
    });

  if ( projectLists.length < 5 ) {
    projectLists.push(<ProjectListItem project={null}></ProjectListItem>);
  }

  return projectLists;
}

export default function OnGoingProjectsSection() {
  const onGoingProjectComponent = mapOnGoingProjects();
  return (
    <div className="bg-theme1 pb-3">
      <SectionTitle sectionName="On Going Projects" /> 
      <div className="pt-2 grid grid-cols-5 gap-10 px-10"> 
        {onGoingProjectComponent}
      </div>
    </div>
  );
}
