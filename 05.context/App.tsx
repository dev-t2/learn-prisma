import React, { memo } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
});

const App = () => {
  return (
    <StyledView>
      <Text>Open up App.tsx to start working on your app!</Text>
    </StyledView>
  );
};

export default memo(App);
