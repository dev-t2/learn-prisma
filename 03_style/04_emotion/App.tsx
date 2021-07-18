import React, { memo, useCallback, useState } from 'react';
import { Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { darkTheme, lightTheme } from './src/theme';
import { Button, Input } from './src/components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.backgroudColor,
  alignItems: 'center',
  justifyContent: 'center',
}));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onValueChange = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <StatusBar style="auto" />

        <Switch value={isDarkMode} onValueChange={onValueChange} />

        <Button title="React Native" />
        <Button title="TypeScript" />

        <Input />
        <Input />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
