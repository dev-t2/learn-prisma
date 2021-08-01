import React, { FC, memo, useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';

import Button from './Button';
import { checkIcon, deleteIcon, editIcon, uncheckIcon } from '../icons';

interface IContainer {
  isCompleted: boolean;
}

const Container = styled.View<IContainer>(({ theme, isCompleted }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  padding: 5,
  marginVertical: 5,
  opacity: isCompleted ? 0.4 : 1,
}));

interface IStyledText {
  isCompleted: boolean;
}

const StyledText = styled.Text<IStyledText>(({ theme, isCompleted }) => ({
  flex: 1,
  minHeight: 30,
  color: theme.text,
  fontSize: 20,
  textAlignVertical: 'center',
  margin: 10,
  textDecorationLine: isCompleted ? 'line-through' : 'none',
}));

interface ITodo {
  todo: Todo;
  onCheck: (id: number) => (event: GestureResponderEvent) => void;
  onDelete: (id: number) => (event: GestureResponderEvent) => void;
}

const Todo: FC<ITodo> = ({ todo, onCheck, onDelete }) => {
  const onPress = useCallback(() => {}, []);

  return (
    <Container isCompleted={todo.isCompleted}>
      <Button
        icon={todo.isCompleted ? checkIcon : uncheckIcon}
        onPress={onCheck(todo.id)}
      />

      <StyledText isCompleted={todo.isCompleted}>{todo.text}</StyledText>

      {todo.isCompleted || <Button icon={editIcon} onPress={onPress} />}

      <Button icon={deleteIcon} onPress={onDelete(todo.id)} />
    </Container>
  );
};

export default memo(Todo);
