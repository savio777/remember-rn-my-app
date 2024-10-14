import {DefaultTheme} from 'styled-components';

const defaultTheme: DefaultTheme = {
  borderRadius: '12px',

  colors: {
    black: '#1C1C1C',
    white: '#EEF0F2',

    blue: {
      regular: '#51BBFE',
    },

    yellow: {
      regular: '#DBAD6A',
    },

    red: {
      regular: '#FF3C38',
    },

    green: {
      regular: '#8FF7A7',
    },

    gray: {
      blue: '#6699CC',
      green: '#9BC1BC',
    },
  },
};

export type IColors = typeof defaultTheme.colors;

export {defaultTheme};
