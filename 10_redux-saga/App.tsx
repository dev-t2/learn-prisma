import React, { memo } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <Text>Open up App.tsx to start working on your app!</Text>
    </Container>
  );
};

export default memo(App);
