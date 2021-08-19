import React, { memo, useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignInScreenNavigationProp } from '../navigation/Auth';
import { Button, Image, Input, TextButton } from '../components';

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

const logo =
  'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/logo.png?alt=media';

const SignIn = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  const onEmail = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onSignIn = useCallback(() => {}, []);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container insets={insets}>
      <Image uri={logo} />

      <Input
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={onEmail}
      />

      <Input
        ref={passwordRef}
        label="Password"
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={onSignIn}
      />

      <Button onPress={onSignIn}>SignIn</Button>
      <TextButton onPress={onSignUp}>SignUp</TextButton>
    </Container>
  );
};

export default memo(SignIn);
