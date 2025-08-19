// src/components/Experience.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

export default function Experience() {
  return (
    <Grid sx={{ marginTop: '10%' }} container spacing={2}>
      <Typography variant="h4" gutterBottom>Professional Experience</Typography>
      <Typography variant="h6">Genamplify Solutions Hub Pvt Ltd (Sep 2023 – Present)</Typography>
      <Typography variant="subtitle1" gutterBottom>Java Full Stack Developer (Frontend Focus)</Typography>
      <List>
        <ListItem><ListItemText primary="Developed e-commerce platform using React.js and TypeScript" /></ListItem>
        <ListItem><ListItemText primary="Integrated REST APIs and payment gateway functionality" /></ListItem>
        <ListItem><ListItemText primary="Built responsive UI with Material-UI" /></ListItem>
        <ListItem><ListItemText primary="Implemented role-based login system using Node.js and PostgreSQL" /></ListItem>
        <ListItem><ListItemText primary="Introduced QR code-based payment flow" /></ListItem>
      </List>
    </Grid>
  );
}
