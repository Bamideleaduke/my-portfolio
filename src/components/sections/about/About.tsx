import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name='about'>
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, md: 10 },
          backgroundColor: '#1A1A1A',
          color: '#FAFAFA',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Typography
            sx={{
              maxWidth: { xs: '100%', md: '750px' },
              fontFamily: "'Inter', -apple-system, sans-serif",
              lineHeight: 1.6,

              textAlign: { xs: 'center', md: 'left' },

              fontSize: {
                xs: 'clamp(1.1rem, 4vw, 1.3rem)',
                sm: 'clamp(1.2rem, 3vw, 1.4rem)',
                md: 'clamp(1.4rem, 2.2vw, 1.8rem)',
              },
            }}
          >
            I am a frontend engineer driven by a passion for{' '}
            <Box
              component='span'
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: '#e2dcd0',
              }}
            >
              exceptional user experiences
            </Box>
            . My approach merges a deep understanding of modern web technologies
            with an editorial eye for design. I build interfaces that don’t just
            work — they make an impact.
          </Typography>
        </motion.div>
      </Box>
    </Element>
  );
};

export default About;
