import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IStyledPressable {
  disabled: boolean;
}

const StyledPressable = styled.Pressable<IStyledPressable>(
  ({ theme, disabled }) => ({
    width: '100%',
    alignItems: 'center',
    backgroundColor: disabled ? theme.gray2 : theme.main,
    borderRadius: 4,
    padding: 10,
    margin: 10,
  })
);

const Title = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.white,
}));

interface IButton {
  children: ReactNode;
  disabled: boolean;
  onPress: () => void;
}

const Button: FC<IButton> = ({ children, disabled, onPress }) => {
  return (
    <StyledPressable disabled={disabled} onPress={onPress}>
      <Title>{children}</Title>
    </StyledPressable>
  );
};

export default memo(Button);
