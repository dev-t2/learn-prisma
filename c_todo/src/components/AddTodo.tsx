import React, { memo, useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 8,
  paddingHorizontal: 16,
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
}));

const StyledImage = styled.Image({});

const AddTodo = () => {
  const [text, setText] = useState('');

  const onPress = useCallback(() => {
    setText('');

    Keyboard.dismiss();
  }, []);

  return (
    <Container>
      <StyledTextInput placeholder="해야 할 일을 입력하세요" value={text} onChangeText={setText} />

      <StyledPressable onPress={onPress}>
        <StyledImage source={require('../../assets/icons/add_white.png')} />
      </StyledPressable>
    </Container>
  );
};

export default memo(AddTodo);
