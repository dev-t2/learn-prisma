import React, { memo, useCallback, useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion/theme';
import { Button, Input, Title } from './src/components';
import { checkIcon, deleteIcon, editIcon, uncheckIcon } from './src/icons';

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

  const onPress = useCallback(() => {}, []);

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

        <Button icon={checkIcon} onPress={onPress} />
        <Button icon={uncheckIcon} onPress={onPress} />
        <Button icon={editIcon} onPress={onPress} />
        <Button icon={deleteIcon} onPress={onPress} />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
