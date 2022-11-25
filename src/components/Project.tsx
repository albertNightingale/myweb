import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Project } from "../data/projects";

type onGoingProjectProps = {
  project: Project;
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
};

export default function ProjectComponent({
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
