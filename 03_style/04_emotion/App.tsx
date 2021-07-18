import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { Button, Input } from './src/components';

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

      <Input color="#3498db" />
      <Input color="#9b59b6" />
    </Container>
  );
};

export default memo(App);
