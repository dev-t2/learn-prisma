import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

const StyledImageBackground = styled.ImageBackground({
  flex: 1,
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <StatusBar />

      <StyledImageBackground source={require('./assets/images/bg.jpg')} />
    </StyledSafeAreaView>
  );
};

export default memo(App);
