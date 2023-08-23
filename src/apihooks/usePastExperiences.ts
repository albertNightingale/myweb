import { useQuery } from 'react-query';
import { PastExperience } from '../types';

import urlJoin from 'url-join';

async function fetchPastExperiences() {
  const endpointURL = urlJoin(
    `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}`,
    process.env.REACT_APP_ENV as string,
    "pastexperiences"
  );

  // console.log(endpointURL);
  return fetch(endpointURL, { method: "GET" })
    .then((response) => response.json());
}

export default (): { data: PastExperience[], isLoading: boolean, error: any } => {
  const {
    data, isLoading, error,
  } = useQuery('fetch past experiences', fetchPastExperiences, {
    staleTime: Infinity
  });

  return {
    data, isLoading, error,
  }
}