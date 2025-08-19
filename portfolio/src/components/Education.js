// src/components/Education.js
import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Education() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '10%' }}>
      <Typography variant="h4" gutterBottom>Education</Typography>
      <Typography>B.Tech in Computer Science & Engineering</Typography>
      <Typography>Audisankara Institute of Engineering & Technology (2019 – 2023) – 76.13%</Typography>
    </Grid>
  );
}
