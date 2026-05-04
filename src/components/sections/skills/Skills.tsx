import CoreSkills from './CoreSkills';
import { Element } from 'react-scroll';
import { Box, Typography } from '@mui/material';

const Skills = () => {
  return (
    <Element name='skill'>
      <Box
        sx={{
          padding: { xs: '2rem 0', md: '8rem 0rem 0rem' },
        }}
      >
        <Typography
          sx={{
            mb: { xs: 4, md: 8 },
            pb: 1,
            fontWeight: 700,
            lineHeight: 1.1,

            fontSize: {
              xs: 'clamp(1.8rem, 6vw, 2.2rem)',
              md: 'clamp(2.5rem, 4vw, 3rem)',
            },
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
