// src/components/About.js
import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex', flexDirection:'row' // ✅ Vertically center the content
        }}
      >
        {/* Left Side - Image */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/profile.jpg"
            alt="Profile"
            sx={{
              width: '90%', // ✅ Makes image responsive inside its cell
              maxWidth: '300px', // ✅ Prevents image from being too large
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
          />
        </Grid>

        {/* Right Side - Text */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I am a passionate <strong>Java Full Stack Developer</strong> with 1.5+ years of experience in
              designing, developing, and maintaining scalable full-stack applications.
              Skilled in both frontend and backend development, I specialize in
              <strong> React.js, Java, Node.js, and PostgreSQL</strong>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
