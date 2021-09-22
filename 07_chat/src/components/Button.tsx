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
    marginVertical: 20,
  })
);

const Title = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.white,
}));

interface IButton {
  children: ReactNode;
  isActive?: boolean;
  onPress: () => void;
}

const Button: FC<IButton> = ({ children, isActive = false, onPress }) => {
  return (
    <StyledPressable disabled={!isActive} onPress={onPress}>
      <Title>{children}</Title>
    </StyledPressable>
  );
};

export default memo(Button);
