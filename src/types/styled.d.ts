import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: {
        rounded: string;
        full: string;
      };
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      lightBg: string;
      white: string;
      black: string;
      lightgray: string;
      gray: string;
      darkgray: string;
      red: string;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    transition: {
      default: string;
      fast: string;
      smooth: string;
    };
    layers: {
      base: number;
    };
  }
}
