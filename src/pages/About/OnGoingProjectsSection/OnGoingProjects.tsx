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

  return projectLists;
}

export default function OnGoingProjectsSection(props: any) {
  const onGoingProjectComponent = mapOnGoingProjects();
  return (
    <>
      <SectionTitle sectionName="On Going Projects" />
      <div className="grid grid-cols-5 gap-4">  
        {onGoingProjectComponent}
      </div>
    </>
  );
}
