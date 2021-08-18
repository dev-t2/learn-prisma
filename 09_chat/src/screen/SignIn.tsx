import React, { memo, useCallback, useState } from 'react';
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

  const onSubmitEmail = useCallback(() => {}, []);

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
        onSubmitEditing={onSubmitEmail}
      />

      <Input
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={onSignUp}>SignIn</Button>
      <TextButton onPress={onSignUp}>SignUp</TextButton>
    </Container>
  );
};

export default memo(SignIn);
