import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Experience } from "../../data/experiences";
import KeyValueContent from "../../components/KeyValueContent";

type ExperienceProp = {
  experience: Experience;
};

function addKeyValueContents(experience: Experience) {
  const contents = new Array<JSX.Element>();
  contents.push(
    <KeyValueContent
      inline={true}
      fieldName={"Experience Type"}
      fieldValue={experience.type}
    />
  );
  contents.push(
    <KeyValueContent
      inline={true}
      fieldName={"Starting Since"}
      fieldValue={experience.startDate}
    />
  );
  if (experience.endDate) {
    contents.push(
      <KeyValueContent
        inline={true}
        fieldName={"Ending At"}
        fieldValue={experience.endDate}
      />
    );
  }
  return contents;
}

export default function PastExperience({ experience }: ExperienceProp) {
  return (
    <Card sx={{ backgroundColor: "blue" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: "25px" }}>{experience.title}</Typography>
        }
        subheader={
          <Typography sx={{ fontSize: "20px" }}>
            in {experience.orgName}{" "}
          </Typography>
        }
      />
      <CardContent>
        {addKeyValueContents(experience)}
        <Typography variant="body1" sx={{ color: "white" }}>
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
