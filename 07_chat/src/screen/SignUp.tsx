import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SignUpNavigation } from '../navigation/Auth';
import { signUp } from '../firebase';
import { validateEmail } from '../api';
import {
  Button,
  ErrorMessage,
  Image,
  Input,
  InsetsContainer,
  Loading,
} from '../components';

const defaultPhoto =
  'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/face.png?alt=media';

const SignUp = () => {
  const navigation = useNavigation<SignUpNavigation>();

  const [photo, setPhoto] = useState(defaultPhoto);
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const displayNameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!email) {
      setErrorMessage('이메일을 입력해주세요');
    } else if (!validateEmail(email)) {
      setErrorMessage('유효한 이메일 주소를 입력해주세요');
    } else if (!displayName) {
      setErrorMessage('이름을 입력해주세요');
    } else if (!password) {
      setErrorMessage('비밀번호를 입력해주세요');
    } else if (password.length < 6) {
      setErrorMessage('비밀번호는 6자리 이상 입력해주세요');
    } else if (!passwordConfirm) {
      setErrorMessage('비밀번호를 한번 더 입력해주세요');
    } else if (password !== passwordConfirm) {
      setErrorMessage('비밀번호와 일치하지 않습니다');
    } else {
      setErrorMessage('');
    }
  }, [email, displayName, password, passwordConfirm]);

  useEffect(() => {
    setIsValid(!errorMessage);
  }, [errorMessage]);

  const onChangePhoto = useCallback((uri: string) => {
    setPhoto(uri);
  }, []);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());
  }, []);

  const onSubmitEmail = useCallback(() => {
    displayNameRef.current?.focus();
  }, []);

  const onChangeDisplayName = useCallback((displayName: string) => {
    setDisplayName(displayName.trim());
  }, []);

  const onSubmitDisplayName = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password.trim());
  }, []);

  const onSubmitPassword = useCallback(() => {
    passwordConfirmRef.current?.focus();
  }, []);

  const onChangePasswordConfirm = useCallback((passwordConfirm: string) => {
    setPasswordConfirm(passwordConfirm.trim());
  }, []);

  const onSignUp = useCallback(async () => {
    try {
      setIsLoading(true);

      await signUp({ photo, email, displayName, password });

      setIsLoading(false);

      navigation.reset({ routes: [{ name: 'SignIn' }] });
    } catch (error) {
      setIsLoading(false);

      Alert.alert((error as Error).message);
    }
  }, [photo, email, displayName, password, navigation]);

  return (
    <InsetsContainer isInsets={false}>
      <Loading isLoading={isLoading} />

      <Image isPhoto uri={photo} onChangePhoto={onChangePhoto} />

      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요"
        returnKeyType="next"
        value={email}
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
      />

      <Input
        ref={displayNameRef}
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        maxLength={10}
        returnKeyType="next"
        value={displayName}
        onChangeText={onChangeDisplayName}
        onSubmitEditing={onSubmitDisplayName}
      />

      <Input
        ref={passwordRef}
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry
        returnKeyType="next"
        value={password}
        onChangeText={onChangePassword}
        onSubmitEditing={onSubmitPassword}
      />

      <Input
        ref={passwordConfirmRef}
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해주세요"
        secureTextEntry
        returnKeyType="done"
        value={passwordConfirm}
        onChangeText={onChangePasswordConfirm}
      />

      <ErrorMessage>{errorMessage}</ErrorMessage>

      <Button disabled={!isValid} onPress={onSignUp}>
        회원가입
      </Button>
    </InsetsContainer>
  );
};

export default memo(SignUp);
