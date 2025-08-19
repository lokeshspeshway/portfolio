// src/components/About.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography>
        I am a passionate Java Full Stack Developer with 1+ years of experience in designing, developing, and maintaining scalable full-stack applications.
        Skilled in both frontend and backend development, I specialize in React.js, Java, Node.js, and PostgreSQL.
      </Typography>
    </Paper>
  );
}
