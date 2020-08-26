import { createMuiTheme } from '@material-ui/core/styles';

const DemoMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#bb002f',
      contrastText: '#ffffff'
    }
  },
});

export default DemoMuiTheme;