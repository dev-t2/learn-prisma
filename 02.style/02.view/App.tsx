import React, { memo } from 'react';
import { Dimensions, Platform, StatusBar } from 'react-native';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const StyledSafeAreaView = styled.SafeAreaView({
  backgroundColor: Colors.blue900,
  height,
});

const StyledText = styled.Text({
  fontSize: 24,
  color: '#ffffff',
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <StatusBar />

      <StyledText>os: {Platform.OS}</StyledText>
      <StyledText>width: {width} px</StyledText>
      <StyledText>height: {height} px</StyledText>
    </StyledSafeAreaView>
  );
};

export default memo(App);
