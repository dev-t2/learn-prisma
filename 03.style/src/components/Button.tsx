import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

const StyledPressable = styled.Pressable`
  background-color: #9b59b6;
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <StyledPressable>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
