import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/features/colorModeSlice';
import { Colors } from '../../constants/colors';
import { InputTheme } from './mui-input';
import { MenuItemTheme } from './menu-item-theme';


export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        // main: Colors.Success,
        main: Colors.darkBG,
      },
      // secondary: {
      //   main: Colors.Grundge,
      //   },
        // text: {
        //     primary: Colors.Grundge, 
        //   },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // primary: {
      //   main: Colors.Primary,
      // },
      // secondary: {
      //   main: Colors.PaleGray,
      //     },
          // text: {
          //   primary: Colors.PaleGray,
          // },
    },
  });

const GlobalTheme = () => {
    const colorMode = useSelector(selectColorMode);
  
  const theme = createTheme({
    typography: {
      fontSize: 16,
      h1: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 900,
        fontSize: "clamp(3rem, 10vw, 8rem)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
        textTransform: "uppercase",
      },
      h2: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(2rem, 8vw, 5rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
      },
      h3: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontStyle: "italic",
        fontSize: "clamp(1.5rem, 5vw, 3rem)",
        lineHeight: 1.2,
      },
      h4: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(1.25rem, 4vw, 2rem)",
        lineHeight: 1.2,
      },
      h5: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.3,
      },
      h6: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },
      body1: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      },
      fontFamily: [
        'Inter',
        '-apple-system',
        'sans-serif',
      ].join(','),
    },
        palette: {
          mode: colorMode,
          background: {
            default: Colors.OffWhite,
            paper: Colors.OffWhite,
          },
          text: {
            primary: Colors.Black,
            secondary: Colors.TextGray,
          },
        // primary: colorMode === 'dark' ? { main: Colors.Primary } : { main: Colors.Success },
        // secondary: colorMode === 'dark' ? { main: Colors.PaleGray } : { main: Colors.Grundge },
        // Add other palette settings as needed
                    
      },
      components: {
        MuiInput: InputTheme,
        MuiMenuItem: MenuItemTheme,
        // MuiMenu: MenuTheme,
        // MuiTooltip: TooltipTheme,
        // MuiCheckbox: CheckBoxTheme,
        // MuiRadio: RadioTheme,
        // MuiInputBase: InputBaseTheme,
        MuiCssBaseline: {
          styleOverrides: {
            '.fancy-scrollbar': {
              '&::-webkit-scrollbar-thumb': {
                background: Colors.Primary,
                borderRadius: 10,
              },
              '::-webkit-scrollbar': { width: 5 },
            },
          },
        },
      },
      });
  
    return theme;
  };
export default GlobalTheme;



