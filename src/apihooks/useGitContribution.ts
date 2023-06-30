import { useQuery } from 'react-query';

export default () => {
  const {
    data, isLoading, error,
  } = useQuery('fetch github contribution', async () => {
    return fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}/githubContribution`, { method: "GET" })
      .then((response) => response.json());
  });

  return {
    data, isLoading, error,
  }
}