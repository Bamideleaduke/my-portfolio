import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import ControlBtn from './ControlBtn';

const Header = () => {
  return (
    <Element name='header'>
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          padding: { xs: '4rem 2rem', md: '8rem 4rem' },
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
            variant='body1'
            sx={{
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Bamidele Barakat — Software Engineer
          </Typography>
          <Typography variant='h1' sx={{ maxWidth: '1200px' }}>
            ENGINEERING ELEGANT DIGITAL EXPERIENCES.
          </Typography>
          <Typography
            variant='h3'
            sx={{
              marginTop: '2rem',
              maxWidth: '800px',
              color: 'text.secondary',
            }}
          >
            Crafting the web with precision, high contrast, and intent.
          </Typography>
        </motion.div>
        <ControlBtn />
      </Box>
    </Element>
  );
};

export default Header;
