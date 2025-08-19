// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', p: 2, mt: 4, bgcolor: '#1976d2', color: 'white' }}>
      <Typography>© {new Date().getFullYear()} 6309737984,  lokesh6960@gmail.com</Typography>
    </Box>
  );
}
