import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export const parameters = {
  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Light',
        value: theme.colors.white
      },
      {
        name: 'Dark',
        value: theme.colors.black
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
