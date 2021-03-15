import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

interface IStyledPressable {
  title: string;
}

const StyledPressable = styled.Pressable<IStyledPressable>`
  background-color: ${({ theme, title }) => (title === 'React Native' ? theme.blue : theme.purple)};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <StyledPressable title={title}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
