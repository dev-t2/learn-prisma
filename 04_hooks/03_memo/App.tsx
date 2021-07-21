import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import Length from './src/components/Length';

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

      <Length />
    </Container>
  );
};

export default memo(App);
