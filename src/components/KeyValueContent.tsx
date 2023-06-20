import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

type propType = {
  inline: boolean;
  fieldName: string;
  fieldValue: string;
};

const fieldNameStyle = { color: 'yellow', display: 'inline' };
const fieldValueStyle = { color: 'white', display: 'inline' };

export default function KeyValueContent({ inline, fieldName, fieldValue }: propType) {
  const boxStyle = inline ? 'inline' : 'block';
  return (
    <Box sx={{ display: boxStyle }}>
      <Typography variant="body1" sx={fieldNameStyle}>
        {fieldName + '  '}
      </Typography>
      <Typography variant="body1" sx={fieldValueStyle}>
        {fieldValue + '  '}
      </Typography>
    </Box>
  );
}
