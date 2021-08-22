import React, { memo, useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

import { Button, Image, Input } from '../components';

interface IContainer {
  insets: EdgeInsets;
}

const Container = styled.View<IContainer>(({ theme, insets }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
  paddingTop: insets.top,
  paddingBottom: insets.bottom,
  paddingHorizontal: 20,
}));

const SignUp = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const nameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  const onSubmitEmail = useCallback(() => {
    nameRef.current?.focus();
  }, []);

  const onSubmitName = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onSubmitPassword = useCallback(() => {
    passwordConfirmRef.current?.focus();
  }, []);

  const onSignUp = useCallback(() => {}, []);

  return (
    <Container insets={insets}>
      <Image />

      <Input
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={onSubmitEmail}
      />

      <Input
        ref={nameRef}
        label="Name"
        placeholder="Name"
        returnKeyType="next"
        value={name}
        onChangeText={setName}
        onSubmitEditing={onSubmitName}
      />

      <Input
        ref={passwordRef}
        label="Password"
        placeholder="Password"
        secureTextEntry
        returnKeyType="next"
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={onSubmitPassword}
      />

      <Input
        ref={passwordConfirmRef}
        label="Password Confirm"
        placeholder="Password Confirm"
        returnKeyType="done"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        onSubmitEditing={onSignUp}
      />

      <Button onPress={onSignUp}>SignUp</Button>
    </Container>
  );
};

export default memo(SignUp);
