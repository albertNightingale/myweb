import React from 'react';
import { Project } from '../../../types';
import SectionTitle from '../../../components/SectionTitle';
import ProjectListItem from './ProjectListItem';
import useProjects from '../../../apihooks/useProjects';

function mapOnGoingProjects(projects: Project[]) {
  const projectLists = projects
    .filter((proj: Project) => proj.onGoing)
    .map((proj: Project) => {
      const projectItem = <ProjectListItem project={proj}></ProjectListItem>;
      return projectItem;
    });

  if (projectLists.length < 5) {
    projectLists.push(<ProjectListItem project={null}></ProjectListItem>);
  }
  return projectLists;
}

export default function OnGoingProjectsSection() {
  const { data, error, isLoading } = useProjects();
  const loadingComponent = isLoading || !data ? <div>Loading...</div> : <></>;
  const errorComponent = error ? <div>Error: {error.toString()}</div> : <></>;

  return (
    <div className="bg-theme1 pb-3">
      <SectionTitle sectionName="On Going Projects" />
      {loadingComponent}
      {errorComponent}
      <div className="grid grid-cols-5 gap-10 px-10">{mapOnGoingProjects(data)}</div>
    </div>
  );
}
