import React, { memo } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion/theme';
import { Title } from './src/components';

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.background,
  paddingTop: Constants.statusBarHeight,
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />

      <Container>
        <Title>TODO</Title>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
