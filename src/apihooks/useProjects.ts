import { useQuery } from "react-query";
import { Project } from "../data/projects";

export default () => {
  const {
    data, isLoading, error,
  } = useQuery('fetch', async () => {
    const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_IP}/projects`);
    const jsonData = await response.json();
    return jsonData.data as Array<Project>;
  });

  return {
    data, isLoading, error,
  }
}