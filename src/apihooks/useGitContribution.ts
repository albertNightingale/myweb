import { useQuery } from 'react-query';

export default () => {
  const {
    data, isLoading, error,
  } = useQuery('fetch', async () => {
    const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}/githubcontribution`);
    const jsonData = await response.json();
    return jsonData.data;
  });

  return {
    data, isLoading, error,
  }
}