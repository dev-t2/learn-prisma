import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

export const theme: DefaultTheme = {};
