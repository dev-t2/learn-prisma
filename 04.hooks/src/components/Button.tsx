import React, { FC, memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

const StyledPressable = styled.Pressable({
  backgroundColor: '#3498db',
  marginVertical: 8,
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 16,
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 24,
  color: '#fff',
  fontWeight: 'bold',
});

interface IButton {
  title: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({ title, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
