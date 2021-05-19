import React, { memo } from 'react';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const StyledView = styled.View({
  padding: 5,
  backgroundColor: Colors.blue700,
  flex: 1,
});

const StyledText = styled.Text({
  fontSize: 20,
  color: Colors.white,
});

const StyledView1 = styled.View({
  padding: 5,
  backgroundColor: Colors.red700,
  marginTop: 5,
});

const StyledView2 = styled.View({
  padding: 5,
  backgroundColor: Colors.green700,
  flex: 1,
  marginTop: 5,
});

const StyledView3 = styled.View({
  padding: 5,
  backgroundColor: Colors.purple700,
  flex: 2,
  marginTop: 5,
});

const TITLE = 'Content';

const Content = () => {
  return (
    <StyledView>
      <StyledText>{TITLE}</StyledText>

      <StyledView1>
        <StyledText>flex: 0</StyledText>
      </StyledView1>

      <StyledView2>
        <StyledText>flex: 1</StyledText>
      </StyledView2>

      <StyledView3>
        <StyledText>flex: 2</StyledText>
      </StyledView3>
    </StyledView>
  );
};

export default memo(Content);
