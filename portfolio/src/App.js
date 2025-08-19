// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("https://media.istockphoto.com/id/592031250/photo/milky-way-and-pink-light-at-mountains-night-colorful-landscape.jpg?s=612x612&w=0&k=20&c=MlBuwRU4M-eZda80ONcdV9NbwtyJQrvggug31A6vLJU=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white', // for better text contrast
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 2, p: 3, mt: 2 }}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
