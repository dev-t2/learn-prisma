/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { AddTodo, Container, DateHead, Empty } from './src/components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.primaryVariant} />

          <DateHead />

          <Empty />

          <AddTodo />
        </Container>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default memo(App);
