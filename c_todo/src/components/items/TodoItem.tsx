import React, { FC, memo } from 'react';
import styled from '@emotion/native';

import { ITodo } from '../../../App';

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
});

const Check = styled.View(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: theme.colors.primary,
}));

const StyledText = styled.Text(({ theme }) => ({
  flex: 1,
  fontSize: 16,
  color: theme.colors.text,
  marginLeft: 16,
}));

interface ITodoItem {
  item: ITodo;
}

const TodoItem: FC<ITodoItem> = ({ item }) => {
  return (
    <Container>
      <Check />

      <StyledText>{item.text}</StyledText>
    </Container>
  );
};

export default memo(TodoItem);
