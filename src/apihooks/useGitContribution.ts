import { useQuery } from 'react-query';
import { GitContributionType } from '../types';

import urlJoin from 'url-join';

async function fetchGithubContribution() {
  const endpointURL = urlJoin(
    `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}`,
    process.env.REACT_APP_ENV as string,
    "githubContribution"
  );

  // console.log(endpointURL);
  return fetch(endpointURL, { method: "GET" })
    .then((response) => response.json());
}

export default (): { data: GitContributionType, isLoading: boolean, error: any } => {
  const {
    data, isLoading, error,
  } = useQuery('fetch github contribution', fetchGithubContribution, {
    staleTime: Infinity
  });

  return {
    data, isLoading, error,
  }
}