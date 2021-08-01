import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GestureResponderEvent, TextInput } from 'react-native';
import { useTheme } from '@emotion/react';
import styled, { css } from '@emotion/native';

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

const text = css({
  flex: 1,
  fontSize: 20,
  textAlignVertical: 'center',
  margin: 10,
});

const StyledTextInput = styled.TextInput(({ theme }) => ({
  ...text,
  color: theme.text,
}));

interface IStyledText {
  isCompleted: boolean;
}

const StyledText = styled.Text<IStyledText>(({ theme, isCompleted }) => ({
  ...text,
  color: theme.text,
  textDecorationLine: isCompleted ? 'line-through' : 'none',
}));

interface ITodo {
  todo: Todo;
  onCheck: (id: number) => (event: GestureResponderEvent) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => (event: GestureResponderEvent) => void;
}

const Todo: FC<ITodo> = ({ todo, onCheck, onEdit, onDelete }) => {
  const theme = useTheme();

  const [isEdit, setIsEdit] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const editRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isEdit) {
      editRef.current?.focus();
    }
  }, [isEdit]);

  const onPress = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onChangeText = useCallback((text: string) => {
    setUpdatedText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (updatedText.length > 0) {
      onEdit(todo.id, updatedText);
    } else {
      setUpdatedText(todo.text);
    }

    setIsEdit(false);
  }, [onEdit, todo.id, updatedText, todo.text]);

  const onBlur = useCallback(() => {
    setUpdatedText(todo.text);
    setIsEdit(false);
  }, [todo.text]);

  return (
    <Container isCompleted={todo.isCompleted}>
      {isEdit ? (
        <StyledTextInput
          ref={editRef}
          value={updatedText}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          placeholder="Please update what to do..."
          placeholderTextColor={theme.text}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
        />
      ) : (
        <>
          <Button
            icon={todo.isCompleted ? checkIcon : uncheckIcon}
            onPress={onCheck(todo.id)}
          />
          <StyledText isCompleted={todo.isCompleted}>{todo.text}</StyledText>

          {todo.isCompleted || <Button icon={editIcon} onPress={onPress} />}

          <Button icon={deleteIcon} onPress={onDelete(todo.id)} />
        </>
      )}
    </Container>
  );
};

export default memo(Todo);
