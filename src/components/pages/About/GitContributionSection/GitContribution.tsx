import React from 'react';
import SectionTitle from '../../../SectionTitle';
import { useGitContribution } from '../../../../apihooks';

export default function GitContribution() {
  const { data, error, isLoading } = useGitContribution();
  const loadingComponent = isLoading ? <div>Loading...</div> : <></>;
  const errorComponent = error ? <div>Error: {error.toString()}</div> : <></>;
  return (
    <div className="flex flex-row bg-[#b5daff] pt-1 pb-1">
      <SectionTitle sectionName="On Going Projects" />
      {loadingComponent}
      {errorComponent}
      {
        // TODO: use the library for data implementation
      }
    </div>
  );
}
