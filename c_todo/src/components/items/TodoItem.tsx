import React, { FC, memo, useCallback } from 'react';
import { Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { ITodo } from '../../../App';

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
});

interface IStyledPressable {
  done: boolean;
}

const StyledPressable = styled.Pressable<IStyledPressable>(({ theme, done }) => ({
  width: 23,
  height: 23,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: 12,
  borderColor: theme.colors.primary,
  backgroundColor: done ? theme.colors.primary : theme.colors.background,
}));

interface IStyledText {
  done: boolean;
}

const StyledText = styled.Text<IStyledText>(({ theme, done }) => ({
  flex: 1,
  fontSize: 16,
  color: done ? theme.colors.disabled : theme.colors.text,
  textDecorationLine: done ? 'line-through' : undefined,
  marginLeft: 16,
}));

const IconPressable = styled.Pressable({
  width: 24,
  height: 24,
  marginLeft: 16,
});

interface ITodoItem {
  item: ITodo;
  onUpdate: (id: number) => () => void;
  onDelete: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = ({ item, onUpdate, onDelete }) => {
  const theme = useTheme();

  const onAlert = useCallback(
    ({ id, text, done }: ITodo) =>
      () => {
        if (done) {
          Alert.alert(
            '정말로 삭제하시겠어요?',
            `삭제할 내용: ${text}`,
            [
              { text: '취소', style: 'cancel' },
              { text: '삭제', style: 'destructive', onPress: () => onDelete(id) },
            ],
            { cancelable: true },
          );
        }
      },
    [onDelete],
  );

  return (
    <Container>
      <StyledPressable done={item.done} onPress={onUpdate(item.id)}>
        {item.done && (
          <Image source={require('../../../assets/icons/check.png')} resizeMode="contain" />
        )}
      </StyledPressable>

      <StyledText done={item.done}>{item.text}</StyledText>

      <IconPressable onPress={onAlert(item)}>
        {item.done && <Icon name="delete" size={24} color={theme.colors.delete} />}
      </IconPressable>
    </Container>
  );
};

export default memo(TodoItem);
