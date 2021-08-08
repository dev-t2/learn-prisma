import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { store } from './src/redux';
import { Count } from './src/components';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar style="auto" />

        <Count />
      </Container>
    </Provider>
  );
};

export default memo(App);
