import React, { memo, useCallback, useState } from 'react';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import Form from './src/components/Form';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisible = useCallback(() => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <Button title={isVisible ? 'Hide' : 'Show'} onPress={onVisible} />

      {isVisible && <Form />}
    </Container>
  );
};

export default memo(App);
