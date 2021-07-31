import React, { memo, useCallback, useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion/theme';
import { Input, Title } from './src/components';

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.background,
  paddingTop: Constants.statusBarHeight,
}));

const App = () => {
  const [value, setValue] = useState('');

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    setValue('');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <Title>TODO</Title>

        <Input
          value={value}
          placeholder="Please enter what to do..."
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
