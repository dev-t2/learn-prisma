import React, { FC, memo, ReactNode, useCallback } from 'react';
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
  children: ReactNode;
  isCompleted: boolean;
}

const Todo: FC<ITodo> = ({ children, isCompleted }) => {
  const onPress = useCallback(() => {}, []);

  return (
    <Container>
      <Button icon={isCompleted ? checkIcon : uncheckIcon} onPress={onPress} />
      <StyledText>{children}</StyledText>
      <Button icon={editIcon} onPress={onPress} />
      <Button icon={deleteIcon} onPress={onPress} />
    </Container>
  );
};

export default memo(Todo);
