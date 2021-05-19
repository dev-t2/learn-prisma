import React, { memo } from 'react';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const StyledView = styled.View({
  padding: 5,
  backgroundColor: Colors.blue900,
});

const StyledText = styled.Text({
  fontSize: 20,
  color: Colors.white,
});

const TITLE = 'BottomBar';

const BottomBar = () => {
  return (
    <StyledView>
      <StyledText>{TITLE}</StyledText>
    </StyledView>
  );
};

export default memo(BottomBar);
