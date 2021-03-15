import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    background?: string;
    text?: string;
    purple: string;
    blue: string;
  }
}

export const theme: DefaultTheme = {
  purple: '#9b59b6',
  blue: '#3498db',
};

export const lightTheme: DefaultTheme = {
  background: '#fff',
  text: '#fff',
  purple: '#9b59b6',
  blue: '#3498db',
};

export const darkTheme: DefaultTheme = {
  background: '#34495e',
  text: '#34495e',
  purple: '#9b59b6',
  blue: '#3498db',
};
