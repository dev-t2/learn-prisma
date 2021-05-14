import React, { memo } from 'react';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import Color from 'color';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.blue500,
});

const StyledText = styled.Text({
  fontSize: 24,
  color: Color(Colors.blue500).alpha(0.5).lighten(0.5).string(),
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <StyledText>Hello StyleSheet API</StyledText>
    </StyledSafeAreaView>
  );
};

export default memo(App);
