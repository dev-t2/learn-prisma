import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View({
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  marginBottom: 10,
});

const Home = () => {
  return (
    <StyledView>
      <StyledText>Home</StyledText>
      <Pressable>
        <Text>go to the list screen</Text>
      </Pressable>
    </StyledView>
  );
};

export default memo(Home);
