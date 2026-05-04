import { Box, Typography, Chip, Grid } from '@mui/material';
import { Colors } from '../../../constants/colors';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'API Design', 'Data Handling'],
  },
  {
    title: 'Testing & Quality',
    items: ['Jest', 'Cypress', 'Unit Testing', 'Integration Testing', 'a11y'],
  },
  {
    title: 'Tools & Delivery',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'Git',
      'GitHub',
      'AWS (Foundations)',
      'CI/CD Pipelines',
      'Figma',
    ],
  },
];

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: '16px',
      backgroundColor: 'rgba(255,255,255,0.04)',
      // border: '1px solid rgba(255,255,255,0.08)',
      border: `1px solid ${Colors.Grundge}40`,
      backdropFilter: 'blur(10px)',
    }}
  >
    <Typography sx={{ color: Colors.White, fontWeight: 600, mb: 1 }}>
      {title}
    </Typography>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size='small'
          sx={{
            color: Colors.OffWhite,
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: `1px solid ${Colors.Grundge}50`,
          }}
        />
      ))}
    </Box>
  </Box>
);

const CoreSkills = () => {
  return (
    <Box
      sx={{
        margin: '4rem auto',
        padding: '2.2rem',
        borderRadius: '1.5rem',
        backgroundColor: Colors.darkBG,
        border: `1px solid ${Colors.Grundge}40`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <Typography
        variant='h5'
        sx={{
          color: Colors.White,
          fontWeight: 700,
          marginBottom: '1.8rem',
        }}
      >
        Skills & Tools
      </Typography>

      <Grid container spacing={2}>
        {skillGroups.map((group) => (
          <Grid item xs={12} md={6} key={group.title}>
            <Section {...group} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreSkills;
