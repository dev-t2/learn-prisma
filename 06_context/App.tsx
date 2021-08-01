import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import UserProvider from './src/contexts/User';
import User from './src/components/User';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <UserProvider>
      <Container>
        <StatusBar style="auto" />

        <User />
      </Container>
    </UserProvider>
  );
};

export default memo(App);
