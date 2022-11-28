import { ListItem, ListItemText } from "@mui/material";
import { Project } from "../data/projects";

interface onGoingProjectProps {
  project: Project;
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
}

export default function ProjectListItem({
  project,
  children,
}: onGoingProjectProps) {
  return (
    <ListItem component="div" disablePadding>
      <ListItemText>{project.projectName}</ListItemText>
      {children}
    </ListItem>
  );
}
