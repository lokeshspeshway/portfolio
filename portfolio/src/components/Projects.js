// src/components/Projects.js
import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Projects() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '10%' }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      
      <List>
        <Typography variant="h6">Credentialing Platform</Typography>
        <ListItem><ListItemText primary="Developed responsive UI using React.js" /></ListItem>
        <ListItem><ListItemText primary="Integrated REST APIs for real-time data exchange" /></ListItem>
      </List>
      
      <Typography variant="h6" sx={{ mt: 2 }}>Scientific Everna Platform</Typography>
      <List>
        <ListItem><ListItemText primary="Implemented user authentication and session scheduling" /></ListItem>
        <ListItem><ListItemText primary="Built dynamic pages using React.js and Java backend" /></ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 2 }}>LMS (learning management system)</Typography>
      <List>
        <ListItem><ListItemText primary="An interaction between the students and the trainers" /></ListItem>
        <ListItem><ListItemText primary="Providing the materials and recorded sessions " /></ListItem>
      </List>
    </Grid>
  );
}
