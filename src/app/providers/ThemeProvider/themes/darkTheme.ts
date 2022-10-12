import { createTheme } from '@mui/material/styles';
import { Theme } from '../lib/ThemeContext';
import { BaseColors, baseTheme } from './baseTheme';

export const darkTheme = {
  name: Theme.DARK,
  theme: createTheme(baseTheme, {
    palette: {
      mode: 'dark',
      text: {
        primary: BaseColors.TEXT_PRIMARY_INVERTED,
      },
      background: {
        default: BaseColors.BACKGROUND_DARK,
        paper: BaseColors.PAPER_DARK,
      },
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            color: BaseColors.TEXT_PRIMARY_INVERTED,
          },
          icon: {
            color: BaseColors.TEXT_PRIMARY_INVERTED,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: BaseColors.TEXT_PRIMARY_INVERTED,
          },
          contained: {
            boxShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
          },
        },
        variants: [
          {
            props: { variant: 'shadow' },
            style: {
              boxShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
              color: BaseColors.TEXT_PRIMARY_INVERTED,
              backgroundColor: BaseColors.PRIMARY,
            },
          },
        ],
      },
      MuiLink: {
        styleOverrides: {
          underlineNone: {
            color: BaseColors.TEXT_PRIMARY_INVERTED,
          },
          underlineHover: {
            color: BaseColors.TEXT_PRIMARY_INVERTED,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '100%',
            '& label': {
              color: BaseColors.LABEL_PRIMARY_INVERTED,
            },
            '& label.Mui-focused': {
              color: BaseColors.PRIMARY_LIGHTER,
            },
            '& .MuiFilledInput-root': {
              backgroundColor: BaseColors.PAPER_DARK,
            },
          },
        },
      },
    },
  }),
};
