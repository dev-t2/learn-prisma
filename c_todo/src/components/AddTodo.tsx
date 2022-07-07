import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.colors.border,
}));

const StyledTextInput = styled.TextInput({
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontSize: 16,
});

const AddTodo = () => {
  return (
    <Container>
      <StyledTextInput placeholder="해야 할 일을 입력하세요" />
    </Container>
  );
};

export default memo(AddTodo);
