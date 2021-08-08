import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { store } from './src/redux';
import { theme } from './src/emotion';
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />

        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default memo(App);
