import React, { memo } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <Text>Open up App.tsx to start working on your app!</Text>
    </StyledSafeAreaView>
  );
};

export default memo(App);
