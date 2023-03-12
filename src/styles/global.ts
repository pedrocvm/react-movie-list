import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components';

const GlobalStyles: GlobalStyleComponent<
  Record<string, unknown>,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-somoothing: antialiased;
    -moz-osx-font-somoothing: grayscale;

    &::before, &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-display: swap;
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
    }
  `}

`;

export default GlobalStyles;
