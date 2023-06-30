import { useQuery } from "react-query";

export default () => {
  const {
    data, isLoading, error,
  } = useQuery('fetch projects', async () => {
    return fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}/projects`, { method: "GET" })
      .then((response) => response.json());
  });

  return {
    data, isLoading, error,
  };
}