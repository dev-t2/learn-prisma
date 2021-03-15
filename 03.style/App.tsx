import React, { FC, memo, useCallback, useState } from 'react';
import { Switch } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './src/theme';
import { Button, TextInput } from './src/components';

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const App: FC = () => {
  const [isDark, setIsDark] = useState(false);

  const onValueChange = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledView>
        <Switch value={isDark} onValueChange={onValueChange} />

        <Button title="React Native" />
        <Button title="Styled Components" />

        <TextInput borderColor="#3497db" />
        <TextInput borderColor="#9b59b6" />
      </StyledView>
    </ThemeProvider>
  );
};

export default memo(App);
