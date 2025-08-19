// src/components/Skills.js
import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'TypeScript', 'Material-UI',
  'Java', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'REST APIs',
  'JWT Authentication', 'Payment Gateway Integration', 'Git'
];

export default function Skills() {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>Technical Skills</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" />
        ))}
      </Box>
    </Paper>
  );
}
