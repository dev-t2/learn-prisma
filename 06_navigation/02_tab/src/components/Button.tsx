import React, { FC, memo, ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable({
  backgroundColor: '#778bdd',
  padding: 10,
  margin: 10,
});

const StyledText = styled.Text({
  fontSize: 25,
  color: '#fff',
});

interface IButton {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: FC<IButton> = ({ children, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
