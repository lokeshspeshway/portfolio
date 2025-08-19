// src/components/Education.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function Education() {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>Education</Typography>
      <Typography>B.Tech in Computer Science & Engineering</Typography>
      <Typography>Audisankara Institute of Engineering & Technology (2019 – 2023) – 76.13%</Typography>
    </Paper>
  );
}
