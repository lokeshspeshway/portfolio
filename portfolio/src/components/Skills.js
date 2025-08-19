// src/components/Skills.js
import React from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'TypeScript', 'Material-UI',
  'Java', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'REST APIs',
  'JWT Authentication', 'Payment Gateway Integration', 'Git'
];

export default function Skills() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '10%' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ width: '100%', color: '#fff', fontWeight: 'bold' }} // ✅ White heading
      >
        Technical Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            sx={{
              color: '#fff', // ✅ White text
              borderColor: '#fff', // ✅ White border
              fontWeight: '500',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)', // ✅ Light hover effect
              }
            }}
          />
        ))}
      </Box>
    </Grid>
  );
}
