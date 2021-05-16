import React, { memo } from 'react';
import { ImageSourcePropType, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import * as D from './src/data';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

const StyledImageBackground = styled.ImageBackground({
  flex: 1,
  padding: 10,
});

const StyledImage = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 25,
});

const avatarUrl = D.randomAvatarUrl();
const source: ImageSourcePropType = { uri: avatarUrl };

const App = () => {
  return (
    <StyledSafeAreaView>
      <StatusBar />

      <StyledImageBackground source={require('./assets/images/bg.jpg')}>
        <StyledImage source={source} />
      </StyledImageBackground>
    </StyledSafeAreaView>
  );
};

export default memo(App);
