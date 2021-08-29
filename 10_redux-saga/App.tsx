import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { store } from './src/redux';
import { Button } from './src/components';

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

        <Button />
      </Container>
    </Provider>
  );
};

export default memo(App);
