import React, { memo } from 'react';
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

const SignUp = () => {
  return (
    <Container>
      <StyledText>SignUp</StyledText>
    </Container>
  );
};

export default memo(SignUp);
