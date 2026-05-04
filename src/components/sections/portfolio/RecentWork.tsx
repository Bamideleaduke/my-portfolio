import { Box, Link as MuiLink, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { portfolio } from '../../../data';

const RecentWork = () => {
  return (
    <Element name='portfolio'>
      <Box sx={{ padding: { xs: '2rem', md: '8rem 4rem' } }}>
        <Typography
          variant='h2'
          sx={{
            marginBottom: '6rem',
            borderBottom: '1px solid #1A1A1A',
            paddingBottom: '1rem',
          }}
        >
          SELECTED WORKS.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
          {portfolio
            .slice(0, 3)
            .map(({ id, title, image, github, demo, body }) => {
              return (
                <motion.div
                  key={id}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2rem',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { md: 'flex-end' },
                        gap: '2rem',
                      }}
                    >
                      <Typography
                        variant='h3'
                        sx={{
                          maxWidth: '800px',
                          lineHeight: 1.1,
                          textAlign: 'left',
                        }}
                      >
                        {title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: '2rem' }}>
                        <MuiLink
                          href={demo}
                          underline='hover'
                          sx={{
                            color: '#1A1A1A',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Live Site ↗
                        </MuiLink>
                        <MuiLink
                          href={github}
                          underline='hover'
                          sx={{
                            color: '#1A1A1A',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Source ↗
                        </MuiLink>
                      </Box>
                    </Box>

                    <Typography
                      variant='body1'
                      sx={{
                        maxWidth: '600px',
                        fontSize: '1.25rem',
                        color: 'text.secondary',
                        textAlign: 'left',
                      }}
                    >
                      {body}
                    </Typography>

                    <Box
                      component='img'
                      src={image}
                      sx={{
                        width: '100%',
                        maxHeight: '80vh',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1.2)',
                        transition: 'filter 0.5s ease',
                        '&:hover': { filter: 'grayscale(0%)' },
                      }}
                    />
                  </Box>
                </motion.div>
              );
            })}
        </Box>
      </Box>
    </Element>
  );
};

export default RecentWork;
