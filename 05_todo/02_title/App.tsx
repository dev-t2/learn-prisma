import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion/theme';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
}));

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
