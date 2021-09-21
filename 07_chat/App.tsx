import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/emotion';
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <Navigation />
    </ThemeProvider>
  );
};

export default memo(App);
