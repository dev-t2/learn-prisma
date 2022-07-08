import React, { FC, memo, useCallback, useState } from 'react';
import { Image, Keyboard } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.colors.border,
}));

const StyledTextInput = styled.TextInput({
  flex: 1,
  paddingVertical: 4,
  fontSize: 16,
});

const StyledPressable = styled.Pressable(({ theme }) => ({
  width: 32,
  height: 32,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
  borderRadius: 16,
  marginLeft: 8,
}));

interface IAddTodo {
  onInsert: (text: string) => void;
}

const AddTodo: FC<IAddTodo> = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onSubmit = useCallback(() => {
    onInsert(text);

    setText('');

    Keyboard.dismiss();
  }, [onInsert, text]);

  return (
    <Container>
      <StyledTextInput
        placeholder="해야 할 일을 입력하세요"
        returnKeyType="done"
        value={text}
        onChangeText={setText}
        onSubmitEditing={onSubmit}
      />

      <StyledPressable onPress={onSubmit}>
        <Image source={require('../../assets/icons/add.png')} resizeMode="contain" />
      </StyledPressable>
    </Container>
  );
};

export default memo(AddTodo);
