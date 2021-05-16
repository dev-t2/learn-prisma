import React, { memo, useCallback, useState } from 'react';
import { ImageSourcePropType, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import styled from 'styled-components/native';

import * as D from './src/data';
import { cacheIcons, cacheImages } from './src/lib';

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

const StyledView = styled.View({
  flex: 1,
  padding: 10,
});

const StyledRegularText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontWeight: 400,
  fontFamily: 'DancingScript_400Regular',
});

const StyledMediumText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontWeight: 500,
  fontFamily: 'DancingScript_500Medium',
});

const StyledSemiBoldText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontWeight: 600,
  fontFamily: 'DancingScript_600SemiBold',
});

const StyledBoldText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontWeight: 600,
  fontFamily: 'DancingScript_700Bold',
});

const image: ImageSourcePropType = { uri: D.randomAvatarUrl() };
const text = 'Almost before we knew it, we had left the ground.';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
  });

  const startAsync = useCallback(async () => {
    const icons = cacheIcons([]);
    const images = cacheImages([require('./assets/images/bg.jpg')]);

    await Promise.all([...icons, ...images]);
  }, []);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  return isReady && fontsLoaded ? (
    <StyledSafeAreaView>
      <StatusBar />

      <StyledImageBackground source={require('./assets/images/bg.jpg')}>
        <StyledImage source={image} />

        <StyledView>
          <StyledRegularText>{text} [regular]</StyledRegularText>
          <StyledMediumText>{text} [medium]</StyledMediumText>
          <StyledSemiBoldText>{text} [semi-bold]</StyledSemiBoldText>
          <StyledBoldText>{text} [bold]</StyledBoldText>
        </StyledView>
      </StyledImageBackground>
    </StyledSafeAreaView>
  ) : (
    <AppLoading
      startAsync={startAsync}
      onFinish={onFinish}
      onError={console.error}
    />
  );
};

export default memo(App);
