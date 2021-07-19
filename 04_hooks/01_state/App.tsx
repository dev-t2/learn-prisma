import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { Counter } from './src/components';

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

      <Counter />
    </Container>
  );
};

export default memo(App);
