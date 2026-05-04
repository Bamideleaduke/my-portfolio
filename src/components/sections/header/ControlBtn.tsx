import { Box, Link } from '@mui/material';
import { Button } from '../../shared/buttons/Button';
import { ScrollToSectionButton } from '../nav/ScrollToSection';

const ControlBtn = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
      }}
    >
      <Link
        href='https://drive.google.com/file/d/1WOMY0P1YScWmFndcfQCWLO8h5TwCKD_5/view'
        target='_blank'
        rel='noopener noreferrer'
        sx={{ textDecoration: 'none' }}
      >
        <Button>Download Resume</Button>
      </Link>
      <ScrollToSectionButton
        sectionId='contact'
        button={
          <Button variant='outlined' sx={{ marginLeft: '1.5rem' }}>
            Let's Talk
          </Button>
        }
      ></ScrollToSectionButton>
    </Box>
  );
};

export default ControlBtn;
