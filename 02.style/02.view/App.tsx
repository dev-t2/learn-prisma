import React, { memo } from 'react';
import { Dimensions, Platform, StatusBar } from 'react-native';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const StyledSafeAreaView = styled.SafeAreaView({
  backgroundColor: Colors.blue900,
  flex: 1,
  margin: 10,
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#ffffff',
  marginBottom: 10,
});

const StyledView = styled.View({
  height: 100,
  backgroundColor: Colors.lime500,
  marginBottom: 10,
  borderWidth: 10,
  borderColor: Colors.black,
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <StatusBar />

      <StyledText>os: {Platform.OS}</StyledText>
      <StyledText>width: {width} px</StyledText>
      <StyledText>height: {height} px</StyledText>

      <StyledView />
    </StyledSafeAreaView>
  );
};

export default memo(App);
