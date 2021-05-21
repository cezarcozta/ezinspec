import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    shape:{
      borderRadius: string
    }
    palette: {
      common: {
        red: string,
        green: string,
        yellow: string,
      }
      primary: IPalette,
      secondary: IPalette,
   }
  }
}