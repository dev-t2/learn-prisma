import React, { FC, memo } from 'react';

import styled from 'styled-components/native';

interface IStyledTextInput {
  borderColor: string;
}

const StyledTextInput = styled.TextInput.attrs<IStyledTextInput>(({ borderColor }) => ({
  placeholder: 'Enter a text...',
  placeholderTextColor: borderColor,
}))<IStyledTextInput>`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${({ borderColor }) => borderColor};
  font-size: 24px;
`;

interface ITextInput {
  borderColor: string;
}

const TextInput: FC<ITextInput> = ({ borderColor }) => {
  return <StyledTextInput borderColor={borderColor} />;
};

export default memo(TextInput);
