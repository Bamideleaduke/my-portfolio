import CoreSkills from './CoreSkills';
import { Element } from 'react-scroll';
import { Box, Typography } from '@mui/material';

const Skills = () => {
  return (
    <Element name='skill'>
      <Box sx={{ 
        padding: { xs: '2rem', md: '8rem 0rem 0rem' } }} >
        <Typography
          variant='h2'
          sx={{
            marginBottom: '2rem',
            paddingBottom: '1rem',
          }}
        >
          Technical Stack
        </Typography>
        <CoreSkills />
      </Box>
    </Element>
  );
};

export default Skills;
