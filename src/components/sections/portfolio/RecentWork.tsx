import { Box, Link as MuiLink, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { portfolio } from '../../../data';

const RecentWork = () => {
  return (
    <Element name='portfolio'>
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Typography
          sx={{
            mb: { xs: 4, md: 8 },
            pb: 1,
            borderBottom: '1px solid #2A2A2A',
            fontWeight: 700,
            lineHeight: 1.1,

            fontSize: {
              xs: 'clamp(1.8rem, 6vw, 2.2rem)',
              md: 'clamp(2.5rem, 4vw, 3rem)',
            },
          }}
        >
          SELECTED WORKS.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 6, md: 12 },
          }}
        >
          {portfolio
            .slice(0, 3)
            .map(
              ({
                id,
                title,
                image,
                github,
                demo,
                body,
                highlights,
                builtWith,
              }) => (
                <motion.div
                  key={id}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'flex-end' },
                        gap: { xs: 1.5, md: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          maxWidth: { xs: '100%', md: '700px' },
                          lineHeight: 1.1,
                          fontWeight: 600,

                          fontSize: {
                            xs: 'clamp(1.4rem, 5vw, 1.8rem)',
                            md: 'clamp(2rem, 3vw, 2.5rem)',
                          },
                        }}
                      >
                        {title}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <MuiLink
                          href={demo}
                          underline='hover'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.8rem',
                          }}
                        >
                          Live Site ↗
                        </MuiLink>

                        <MuiLink
                          href={github}
                          underline='hover'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.8rem',
                          }}
                        >
                          Source ↗
                        </MuiLink>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        maxWidth: { xs: '100%', md: '700px' },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 2.5, md: 3 },
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Typography
                        sx={{
                          maxWidth: { xs: '100%', md: '550px' },
                          color: 'text.secondary',
                          lineHeight: 1.6,

                          fontSize: {
                            xs: '0.95rem',
                            md: '1.1rem',
                          },
                        }}
                      >
                        {body}
                      </Typography>
                      {highlights && (
                        <Box
                          sx={{
                            width: '100%',
                            p: { xs: 2, md: 2.5 },
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            backgroundColor: 'action.hover',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.08em',
                              lineHeight: 1.3,
                              textAlign: 'left',
                            }}
                          >
                            Highlights
                          </Typography>

                          <Box
                            component='ul'
                            sx={{
                              m: 0,
                              p: 0,
                              listStyle: 'none',
                              color: 'text.secondary',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 1,
                              justifyContent: 'flex-start',
                              alignItems: 'flex-start',
                            }}
                          >
                            {highlights?.map((highlight) => (
                              <Box
                                component='li'
                                key={highlight}
                                sx={{
                                  minWidth: 0,
                                  fontSize: {
                                    xs: '0.9rem',
                                    md: '0.95rem',
                                  },
                                  lineHeight: 1.5,
                                  overflowWrap: 'anywhere',

                                  '&::before': {
                                    content: '"✓"',
                                    display: 'inline-block',
                                    width: '14px',
                                    marginRight: '6px',
                                    color: 'text.primary',
                                    fontWeight: 700,
                                    lineHeight: 1.4,
                                  },
                                }}
                              >
                                {highlight}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: { xs: 'flex-start', sm: 'center' },
                          flexDirection: { xs: 'column', sm: 'row' },
                          gap: 1.5,
                          width: '100%',
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Built with:
                        </Typography>

                        {builtWith && (
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 0.75,
                            }}
                          >
                            {builtWith?.map((technology) => (
                              <Box
                                component='span'
                                key={technology}
                                sx={{
                                  px: 1.25,
                                  py: 0.5,
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 10,
                                  color: 'text.secondary',
                                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                                  lineHeight: 1.2,
                                }}
                              >
                                {technology}
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>

                    <Box
                      component='img'
                      src={image}
                      sx={{
                        width: '100%',
                        height: { xs: '220px', sm: '300px', md: '420px' },
                        objectFit: 'cover',
                        borderRadius: '12px',

                        filter: 'grayscale(100%) contrast(1.1)',
                        transition: 'all 0.4s ease',

                        '&:hover': {
                          filter: 'grayscale(0%) contrast(1)',
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              ),
            )}
        </Box>
      </Box>
    </Element>
  );
};

export default RecentWork;
