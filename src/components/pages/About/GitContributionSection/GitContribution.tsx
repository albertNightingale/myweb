import React from 'react';
import SectionTitle from '../../../SectionTitle';
import { useGitContribution } from '../../../../apihooks';
import GitContributionChart from './GitContributionChart';

export default function GitContribution() {
  const { data, error, isLoading } = useGitContribution();
  const loadingComponent = isLoading ? <div>Loading...</div> : <></>;
  const errorComponent = error ? <div>Error: {error.toString()}</div> : <></>;
  return (
    <div className="flex flex-col bg-theme1 pb-10">
      <SectionTitle sectionName="Github Contribution Chart" />
      {loadingComponent}
      {errorComponent}
      {data && <GitContributionChart data={data} />}
    </div>
  );
}
