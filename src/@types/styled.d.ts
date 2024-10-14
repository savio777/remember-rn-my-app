import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      white: string;
      black: string;

      yellow: {
        regular: string;
      };

      blue: {
        regular: string;
      };

      red: {
        regular: string;
      };

      green: {
        regular: string;
      };

      gray: {
        green: string;
        blue: string;
      };
    };
  }
}
