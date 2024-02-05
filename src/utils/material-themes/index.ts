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

  const materialTheme = createTheme();
const GlobalTheme = () => {
    const colorMode = useSelector(selectColorMode);
  
  const theme = createTheme({
    typography: {
      fontSize: 16,
      h1: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(38),
        lineHeight: materialTheme.typography.pxToRem(48),
      },
      h2: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(34),
        lineHeight: materialTheme.typography.pxToRem(43),
      },
      h3: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(28),
        lineHeight: materialTheme.typography.pxToRem(38),
      },
      h4: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(24),
        lineHeight: materialTheme.typography.pxToRem(28),
      },
      h5: {
        fontWeight: 600,
        fontSize: materialTheme.typography.pxToRem(20),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      h6: {
        fontWeight: 600,
        fontSize: materialTheme.typography.pxToRem(16),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      body1: {
        fontWeight: 500,
        fontSize: materialTheme.typography.pxToRem(16),
      },
      body2: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(14),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      caption: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(12),
      },
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
        palette: {
          mode: colorMode,
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



