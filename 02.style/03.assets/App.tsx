import React, { memo, useCallback, useState } from 'react';
import { Alert, ImageSourcePropType, StatusBar } from 'react-native';
import { Colors } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import * as D from './src/data';
import { cacheFonts, cacheImages } from './src/lib';

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
  fontFamily: 'DancingScript-Regular',
});

const StyledMediumText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontFamily: 'DancingScript-Medium',
});

const StyledSemiBoldText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontFamily: 'DancingScript-SemiBold',
});

const StyledBoldText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
  color: '#ffffff',
  marginBottom: 10,
  fontFamily: 'DancingScript-Bold',
});

const image: ImageSourcePropType = { uri: D.randomAvatarUrl() };
const text = 'Almost before we knew it, we had left the ground.';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const startAsync = useCallback(async () => {
    const fonts = cacheFonts([
      {
        'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
        'DancingScript-Medium': require('./assets/fonts/DancingScript-Medium.ttf'),
        'DancingScript-SemiBold': require('./assets/fonts/DancingScript-SemiBold.ttf'),
        'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf'),
      },
      MaterialCommunityIcons.font,
    ]);
    const images = cacheImages([require('./assets/images/bg.jpg')]);

    await Promise.all([...fonts, ...images]);
  }, []);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const onPress = useCallback(() => {
    Alert.alert('Icon Pressed');
  }, []);

  return isReady ? (
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

        <MaterialCommunityIcons
          name="home"
          size={50}
          color={Colors.lightBlue500}
          onPress={onPress}
        />
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
