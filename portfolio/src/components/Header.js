// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Lokesh Kanta
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ mr: 2 }}>Java Full Stack Developer</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
