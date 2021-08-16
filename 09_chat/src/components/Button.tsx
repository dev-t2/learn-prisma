import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  backgroundColor: theme.main,
  borderRadius: 4,
  padding: 10,
  margin: 10,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.white,
}));

interface IButton {
  children: ReactNode;
  onPress: () => void;
}

const Button: FC<IButton> = ({ children, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <Title>{children}</Title>
    </StyledPressable>
  );
};

export default memo(Button);
