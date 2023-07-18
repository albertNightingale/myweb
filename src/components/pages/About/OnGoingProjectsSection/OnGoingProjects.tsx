import React from 'react';
import { Project } from '../../../../types';
import SectionTitle from '../../../SectionTitle';
import ProjectListItem from './ProjectListItem';
import { useProjects } from '../../../../apihooks';

function mapOnGoingProjects(projects: Project[]) {
  const projectLists = projects
    .filter((p: Project) => p.onGoing)
    .map((p: Project) => <ProjectListItem key={p.projectName} project={p}></ProjectListItem>);

  if (projectLists.length < 5) {
    projectLists.push(<ProjectListItem key={''} project={null}></ProjectListItem>);
  }
  return projectLists;
}

export default function OnGoingProjectsSection() {
  const { data, error, isLoading } = useProjects();
  const loadingComponent = isLoading ? <div>Loading...</div> : <></>;
  const errorComponent = error ? <div>Error: {error.toString()}</div> : <></>;

  return (
    <div className="bg-theme1 pb-10">
      <SectionTitle sectionName="On Going Projects" />
      {loadingComponent}
      {errorComponent}
      {data && <div className="grid grid-cols-5 gap-10 px-10">{mapOnGoingProjects(data)}</div>}
    </div>
  );
}
