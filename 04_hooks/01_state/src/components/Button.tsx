import React, { FC, memo } from 'react';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable({
  backgroundColor: '#3498db',
  borderRadius: 15,
  paddingVertical: 15,
  paddingHorizontal: 30,
  marginVertical: 10,
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 25,
  fontWeight: '600',
  color: '#fff',
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
