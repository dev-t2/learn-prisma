import React, { memo } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const StyledInput = styled.TextInput(({ theme }) => ({
  width: 200,
  height: 60,
  margin: 5,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: theme.borderColor,
  fontSize: 24,
}));

const Input = () => {
  const theme = useTheme();

  return (
    <StyledInput
      placeholder="Enter a text..."
      placeholderTextColor={theme.borderColor}
    />
  );
};

export default memo(Input);
