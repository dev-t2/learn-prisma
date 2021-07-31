import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
});

const StyledInput = styled.TextInput(({ theme }) => ({
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  fontSize: 20,
  color: theme.text,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginVertical: 10,
  marginHorizontal: 10,
}));

const Input = () => {
  return (
    <Container>
      <StyledInput />
    </Container>
  );
};

export default memo(Input);
