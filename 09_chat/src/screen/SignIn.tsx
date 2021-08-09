import React, { memo } from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
  paddingHorizontal: 20,
}));

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 20,
  color: theme.text,
}));

const SignIn = () => {
  return (
    <Container>
      <StyledText>SignIn</StyledText>

      <Pressable>
        <StyledText>SignUp</StyledText>
      </Pressable>
    </Container>
  );
};

export default memo(SignIn);
