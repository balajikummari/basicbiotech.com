import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0988C8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
    
  },
});

export default theme;