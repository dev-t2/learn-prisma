import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/emotion';
import { store } from './src/redux';
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StatusBar style="auto" />

        <Navigation />
      </Provider>
    </ThemeProvider>
  );
};

export default memo(App);
