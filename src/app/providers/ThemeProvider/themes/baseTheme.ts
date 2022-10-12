import { createTheme } from '@mui/material/styles';

export enum BaseColors {
  PRIMARY = '#4461F2',
  PRIMARY_LIGHTER = '#798EF6',
  PRIMARY_DARKER = '#0B2299',
  DANGER = '#c10e0e',
  WARNING = '#ff9800',
  TEXT_PRIMARY = '#222222',
  LABEL_PRIMARY = '#222222aa',
  TEXT_PRIMARY_INVERTED = '#ffffff',
  LABEL_PRIMARY_INVERTED = '#ffffffaa',
  BACKGROUND_LIGHT = '#fafafa',
  BACKGROUND_DARK = '#0A192F',
  PAPER_LIGHT = '#eaf0f7',
  PAPER_DARK = '#172A46',
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    shadow: true;
  }
}

export const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: BaseColors.PRIMARY,
    },
    error: {
      main: BaseColors.DANGER,
    },
    warning: {
      main: BaseColors.WARNING,
    },
    text: {
      primary: BaseColors.TEXT_PRIMARY,
    },
    background: {
      default: BaseColors.BACKGROUND_LIGHT,
      paper: BaseColors.PAPER_LIGHT,
    },
  },
  typography: {
    fontFamily: 'Raleway',
    button: {
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.03',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 20,
          height: 40,
          padding: '10px 20px',
          color: BaseColors.PRIMARY,
          textTransform: 'capitalize',
        },
        contained: {
          color: BaseColors.TEXT_PRIMARY_INVERTED,
        },
        text: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      variants: [
        {
          props: { variant: 'shadow' },
          style: {
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
          },
        },
      ],
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: BaseColors.TEXT_PRIMARY,
        },
        icon: {
          color: BaseColors.TEXT_PRIMARY,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        colorPrimary: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '1200px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          color: BaseColors.TEXT_PRIMARY,
          '&:hover': {
            fontWeight: 'bold',
          },
        },
        underlineHover: {
          fontWeight: 'bold',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& label': {
            color: BaseColors.LABEL_PRIMARY,
          },
          '& label.Mui-focused': {
            color: BaseColors.PRIMARY,
          },
          '& .MuiFilledInput-root': {
            borderRadius: '10px',
            backgroundColor: BaseColors.PAPER_LIGHT,
          },
          input: {
            borderRadius: '10px',
            fontFeatureSettings: '"pnum" on, "lnum" on',
          },
        },
      },
    },
  },
});
