import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SignInNavigation } from '../navigation/Auth';
import { signIn } from '../firebase';
import { validateEmail } from '../api';
import {
  Button,
  ErrorMessage,
  Image,
  Input,
  InsetsContainer,
  Loading,
  TextButton,
} from '../components';

const logo =
  'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/logo.png?alt=media';

const SignIn = () => {
  const navigation = useNavigation<SignInNavigation>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    setIsValid(!!email && !!password && !errorMessage);
  }, [email, password, errorMessage]);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());

    const validatedEmail = validateEmail(email.trim());

    setErrorMessage(validatedEmail ? '' : '유효한 이메일 주소를 입력해주세요');
  }, []);

  const onSubmitEmail = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password.trim());
  }, []);

  const onSignIn = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn({ email, password });
    } catch (error) {
      setIsLoading(false);

      Alert.alert((error as Error).message);
    }
  }, [email, password]);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <InsetsContainer>
      <Loading isLoading={isLoading} />

      <Image marginVertical={80} uri={logo} />

      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요"
        returnKeyType="next"
        value={email}
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
      />

      <Input
        ref={passwordRef}
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry
        returnKeyType="done"
        value={password}
        onChangeText={onChangePassword}
      />

      <ErrorMessage>{errorMessage}</ErrorMessage>

      <Button isActive={isValid} onPress={onSignIn}>
        로그인
      </Button>

      <TextButton onPress={onSignUp}>회원가입</TextButton>
    </InsetsContainer>
  );
};

export default memo(SignIn);
