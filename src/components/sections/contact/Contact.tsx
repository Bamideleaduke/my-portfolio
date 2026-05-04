import { Box, Link as MuiLink, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='contact'>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111111',
          color: '#FAFAFA',
          textAlign: 'center',
          padding: { xs: '2rem', md: '4rem' },
        }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Typography
            sx={{
              mb: { xs: 1.5, md: 2 },
              textTransform: 'uppercase',
              letterSpacing: { xs: '0.12em', md: '0.2em' },
              color: '#888',
              fontSize: { xs: '0.7rem', md: '0.9rem' },
            }}
          >
            Got a project in mind?
          </Typography>

          <MuiLink
            href='mailto:bamidelebarakatt@outlook.com'
            underline='none'
            sx={{
              color: '#FAFAFA',
              transition: 'opacity 0.3s ease',
              '&:hover': { opacity: 0.7 },
            }}
          >
            <Typography
              sx={{
                fontSize: 'clamp(4rem, 15vw, 12rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.05em',
              }}
            >
              LET'S
              <br />
              TALK.
            </Typography>
          </MuiLink>
        </motion.div>
      </Box>
    </Element>
  );
};

export default Contact;
