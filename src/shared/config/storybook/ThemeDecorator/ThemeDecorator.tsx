import { CssBaseline, ThemeProvider } from '@mui/material';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { darkTheme, lightTheme } from 'app/providers/ThemeProvider/themes';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  const t = theme === Theme.LIGHT ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={t.theme}>
      <CssBaseline />
      <StoryComponent />
    </ThemeProvider>
  );
};
