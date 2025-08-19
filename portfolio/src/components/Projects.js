// src/components/Projects.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Projects() {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      
      <Typography variant="h6">Credentialing Platform</Typography>
      <List>
        <ListItem><ListItemText primary="Developed responsive UI using React.js" /></ListItem>
        <ListItem><ListItemText primary="Integrated REST APIs for real-time data exchange" /></ListItem>
      </List>
      
      <Typography variant="h6" sx={{ mt: 2 }}>Scientific Everna Platform</Typography>
      <List>
        <ListItem><ListItemText primary="Implemented user authentication and session scheduling" /></ListItem>
        <ListItem><ListItemText primary="Built dynamic pages using React.js and Java backend" /></ListItem>
      </List>
    </Paper>
  );
}
