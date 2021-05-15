import React, { memo } from 'react';
import { Platform, StatusBar, useWindowDimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView({
  backgroundColor: Colors.blue200,
});

const StyledText = styled.Text({
  fontSize: 24,
  color: Colors.blue900,
});

const App = () => {
  const { width, height } = useWindowDimensions();

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
