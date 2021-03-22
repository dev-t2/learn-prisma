import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 8,
});

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})({
  border: '1px solid #757575',
  padding: 8,
  marginVertical: 8,
  width: 200,
  fontSize: 16,
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef<TextInput>(null);
  const refEmail = useRef<TextInput>(null);

  useEffect(() => {
    console.log('===== Form Component Mount =====');

    refName.current?.focus();

    return () => console.log('===== Form Component Unmount =====');
  }, []);

  const onChangeName = useCallback(text => {
    setName(text);
  }, []);

  const onSubmitName = useCallback(() => {
    refEmail.current?.focus();
  }, []);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>

      <StyledTextInput
        ref={refName}
        value={name}
        returnKeyType="next"
        placeholder="name"
        onChangeText={onChangeName}
        onSubmitEditing={onSubmitName}
      />
      <StyledTextInput
        ref={refEmail}
        value={email}
        returnKeyType="done"
        placeholder="email"
        onChangeText={onChangeEmail}
      />
    </>
  );
};

export default memo(Form);
