import { createMuiTheme,responsiveFontSizes  } from '@material-ui/core/styles';


// Create a theme instance.

let theme = {
  typography: {
    fontFamily: [
      'Latog',
      'sans-serif',
    ].join(','),
  },
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
    
  }
}

 //theme = responsiveFontSizes(theme);


export const darkTheme = createMuiTheme({
  ...theme,
  palette:{
    ...theme.palette,
    type:'dark'
  }
})

export const lightTheme = createMuiTheme({
  ...theme,
  palette:{
    ...theme.palette,
    type:'light'
  }
})


