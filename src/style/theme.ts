import { alpha, createTheme, Theme } from '@mui/material/styles'
import { CSSProperties } from 'react'


export const openSansFont = [
    'Open Sans',
    'serif',
    'Lato',
    'Roboto',
    'Helvetica',
    'Arial',
  ].join(',')
  
  export const playfairDisplayFont = [
    'Playfair Display',
    'serif',
    'Lato',
    'Roboto',
    'Helvetica',
    'Arial',
  ].join(',')

  type cssGlobalClasses = {
    [key: string]: CSSProperties
  }
  const globals: cssGlobalClasses = {
    a: {
      color: 'black',
    },
    p:  {
      marginBottom: '20px'
    }

}
  
  const SPACE_UNIT = 8
  
  export const latoFont = ['Lato', 'Roboto', 'Helvetica', 'Arial'].join(',')
  
  export const poppinsFont = ['Poppins', 'sans-serif'].join(',')
  
export const colors = {
  primaryDarkBlue: '#072751', //Primary_DarkBlue
  primaryBlue: '#154078', //Primary_Blue
  primaryLightBlue: '#2E84F6', // Primary_LightBlue
  primaryGreenBlue: '#5CB4D3', //Primary_GreenBlue
  accent: '#37E7E7', //Accent
  neutralsWhite: '#fff',
  neutralsBlack: '#383948',
  neutralsWhiteBlue: '#F6F5FF',
  neutralsGray: '#375074', //Neutrals_Gray
}

/* exemple module overridedeclare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}*/


const staticPagesTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 364,
      md: 960, //not used
      lg: 1320,
      xl: 1920, //not used
    },
  },
  palette: {
    text: {
      primary: colors.neutralsWhite,
      secondary: alpha(colors.neutralsWhite, 0.5)
    },
    background: {
      default: colors.primaryBlue,
    },
    common: {
      white: '#fff', //Neutrals_White
      black: '#383948', //Neutrals_Black
    },

    primary: {
      dark: '#072751', //Primary_DarkBlue
      main: '#154078', //Primary_Blue
      light: '#2E84F6', // Primary_LightBlue
      contrastText: '#5CB4D3', //Primary_GreenBlue
    },
  },
  spacing: 4,
  typography: {
    fontFamily: latoFont,

    body2: {
      paddingBottom: '20px',
      fontSize: '16px',
      lineHeight: '20px'

    },

    h1: {
      fontWeight: '700',
      fontSize: '72px',
      lineHeight: '86px',
      letterSpacing: '-0.02em',
      marginBottom: '40px',
      //  color: '#323142',
    },
    h2: {
      fontWeight: '700',
      fontSize: '48px',
      lineHeight: '58px',
      //  color: '#323142',
    },
    h3: {
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '38px',
   
    },
    h4: {
      fontWeight: '700',
      fontSize: '24px',
    },
  
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: globals,
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.accent,
          fontSize: '14px',
          textDecoration: 'none',

          display: 'flex',
          lineHeight: '14px',
          flexDirection: 'row',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          border: `1px solid ${colors.primaryDarkBlue}`,
          borderRadius: '54px',
          backgroundColor: 'transparent',
          textTransform: 'none',
          color: colors.primaryDarkBlue,
          '&:hover': {
            backgroundColor: colors.primaryDarkBlue,
            color: colors.neutralsWhite,
          },
          '&:focus': {
            backgroundColor: colors.neutralsBlack,
            borderColor: colors.neutralsBlack,
            color: colors.neutralsWhite,
          },
        },
      },
    },
  },
})
export default staticPagesTheme