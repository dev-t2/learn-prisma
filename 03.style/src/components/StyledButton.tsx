import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

interface IStyledPressable {
  title: string;
}

const StyledPressable = styled.Pressable<IStyledPressable>`
  background-color: ${({ title }) => (title === 'React Native' ? '#3498db' : '#9b59b6')};
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

interface IStyledButton {
  title: string;
}

const StyledButton: FC<IStyledButton> = ({ title }) => {
  return (
    <StyledPressable title={title}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

export default memo(StyledButton);
