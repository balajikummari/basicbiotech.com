import { createMuiTheme } from '@material-ui/core/styles';
// import DINAlternateBoldwoff from '../public/fonts/DINAlternate-Bold.woff';


// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },

  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [DINAlternateBold],
  //     },
  //   },
  // },

  palette: {
    type: 'dark',
    primary: {
      main: '#0988C8',
    },
    secondary: {
      main: '#19857b',
    },

    typography: {
      button: {
        textTransform: 'none'
      }
    }
    
  },
});

export default theme;