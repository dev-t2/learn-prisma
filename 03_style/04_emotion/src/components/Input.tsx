import React, { FC, memo } from 'react';
import styled from '@emotion/native';

interface IStyledInput {
  color: string;
}

const StyledInput = styled.TextInput<IStyledInput>(({ color }) => ({
  width: 200,
  height: 60,
  margin: 5,
  padding: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: color,
  fontSize: 24,
}));

interface IInput {
  color: string;
}

const Input: FC<IInput> = ({ color }) => {
  return (
    <StyledInput
      color={color}
      placeholder="Enter a text..."
      placeholderTextColor={color}
    />
  );
};

export default memo(Input);
