import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import Button from './src/components/Button';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <Button title="React Native" />
      <Button title="TypeScript" />
    </Container>
  );
};

export default memo(App);
