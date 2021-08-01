import React, { FC, memo, useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';

import Button from './Button';
import { checkIcon, deleteIcon, editIcon, uncheckIcon } from '../icons';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  padding: 5,
  marginVertical: 5,
}));

const StyledText = styled.Text(({ theme }) => ({
  flex: 1,
  minHeight: 30,
  color: theme.text,
  fontSize: 20,
  textAlignVertical: 'center',
  margin: 10,
}));

interface ITodo {
  todo: Todo;
  onDelete: (id: number) => (event: GestureResponderEvent) => void;
}

const Todo: FC<ITodo> = ({ todo, onDelete }) => {
  const onPress = useCallback(() => {}, []);

  return (
    <Container>
      <Button
        icon={todo.isCompleted ? checkIcon : uncheckIcon}
        onPress={onPress}
      />
      <StyledText>{todo.text}</StyledText>
      <Button icon={editIcon} onPress={onPress} />
      <Button icon={deleteIcon} onPress={onDelete(todo.id)} />
    </Container>
  );
};

export default memo(Todo);
