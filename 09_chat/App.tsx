import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
