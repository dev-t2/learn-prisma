import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable({
  width: '100%',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 4,
  padding: 10,
});

const Title = styled.Text(({ theme }) => ({
  fontSize: 18,
  color: theme.link,
}));

interface ITextButton {
  children: ReactNode;
  onPress: () => void;
}

const TextButton: FC<ITextButton> = ({ children, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <Title>{children}</Title>
    </StyledPressable>
  );
};

export default memo(TextButton);
