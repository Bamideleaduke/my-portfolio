import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import ControlBtn from './ControlBtn';

const Header = () => {
  return (
    <Element name='header'>
      <Box
        sx={{
          minHeight: { md: '80vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, md: 10 },
        }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Typography
            variant='body2'
            sx={{
              mb: { xs: 1.5, md: 2 },
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
            }}
          >
            Bamidele Barakat — Software Engineer
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: { xs: '100%', md: '900px' },

              fontSize: {
                xs: 'clamp(2.2rem, 8vw, 3rem)',
                sm: 'clamp(2.5rem, 6vw, 3.5rem)',
                md: 'clamp(3rem, 5vw, 4.5rem)',
              },
            }}
          >
            ENGINEERING ELEGANT DIGITAL EXPERIENCES.
          </Typography>

          <Typography
            sx={{
              mt: { xs: 1.5, md: 2.5 },
              maxWidth: { xs: '100%', md: '600px' },
              color: 'text.secondary',
              lineHeight: 1.6,

              fontSize: {
                xs: '0.95rem',
                sm: '1.05rem',
                md: '1.25rem',
              },
            }}
          >
            Crafting the web with precision, high contrast, and intent.
          </Typography>
        </motion.div>

        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <ControlBtn />
        </Box>
      </Box>
    </Element>
  );
};

export default Header;
