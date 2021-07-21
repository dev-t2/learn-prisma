import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 25,
  margin: 10,
});

const StyledTextInput = styled.TextInput({
  borderWidth: 1,
  borderColor: '#757575',
  padding: 10,
  marginVertical: 10,
  width: 200,
  fontSize: 20,
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef<TextInput>(null);
  const refEmail = useRef<TextInput>(null);

  useEffect(() => {
    console.log('\n==== Form Component Mount ====\n');

    refName.current?.focus();

    return () => {
      console.log('\n==== Form Component Unmount ====\n');
    };
  }, []);

  const onChangeName = useCallback(text => {
    setName(text);
  }, []);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const onSubmitName = useCallback(() => {
    refEmail.current?.focus();
  }, []);

  const onSubmitEmail = useCallback(() => {
    console.log({ name, email });
  }, [name, email]);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>

      <StyledTextInput
        ref={refName}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
        onSubmitEditing={onSubmitName}
        returnKeyType="next"
      />
      <StyledTextInput
        ref={refEmail}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
        returnKeyType="done"
      />
    </>
  );
};

export default memo(Form);
