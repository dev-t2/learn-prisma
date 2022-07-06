import '@emotion/react';

import { ITheme } from './src/theme';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
