import { useQuery } from "react-query";
import { Project } from "../types";
import urlJoin from 'url-join';

async function fetchProjects() {
  const endpointURL = urlJoin(
    `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}`,
    process.env.REACT_APP_ENV as string,
    "projects"
  );

  // console.log(endpointURL);
  return fetch(endpointURL, { method: "GET" })
    .then((response) => response.json());
}

export default (): { data: Project[], isLoading: boolean, error: any } => {
  const {
    data, isLoading, error,
  } = useQuery('fetch projects', fetchProjects, {
    staleTime: Infinity
  });

  return {
    data, isLoading, error,
  };
}