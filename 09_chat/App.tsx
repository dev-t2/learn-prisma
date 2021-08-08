import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { store } from './src/redux';
import { theme } from './src/emotion';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <StatusBar style="auto" />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default memo(App);
