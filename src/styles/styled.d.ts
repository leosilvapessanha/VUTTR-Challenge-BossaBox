import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: sring;
      secundary: sring;
      cards: string;
      background: sring;
      text: sring;
    };
  }
}
