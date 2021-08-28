import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignUpScreenNavigationProp } from '../navigation/Auth';
import { signup } from '../firebase';
import { deleteWhitespace, validateEmail } from '../api';
import { Button, ErrorMessage, Image, Input } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
  paddingVertical: 50,
  paddingHorizontal: 20,
}));

const defaultPhoto =
  'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/face.png?alt=media';

const SignUp = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [photo, setPhoto] = useState(defaultPhoto);
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const nameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!email) {
      setErrorMessage('Please enter your email');
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
    } else if (!displayName) {
      setErrorMessage('Please enter your display name');
    } else if (!password) {
      setErrorMessage('Please enter your password');
    } else if (password.length < 6) {
      setErrorMessage('The password must be at least 6 digits');
    } else if (!passwordConfirm) {
      setErrorMessage('Please enter your confirm password');
    } else if (password !== passwordConfirm) {
      setErrorMessage('It is not the same as password');
    } else {
      setErrorMessage('');
    }
  }, [email, displayName, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(email && displayName && password && passwordConfirm && !errorMessage)
    );
  }, [email, displayName, password, passwordConfirm, errorMessage]);

  const onChangePhoto = useCallback((uri: string) => {
    setPhoto(uri);
  }, []);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(deleteWhitespace(email));
  }, []);

  const onSubmitEmail = useCallback(() => {
    nameRef.current?.focus();
  }, []);

  const onChangeDisplayName = useCallback((displayName: string) => {
    setDisplayName(deleteWhitespace(displayName));
  }, []);

  const onSubmitDisplayName = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(deleteWhitespace(password));
  }, []);

  const onSubmitPassword = useCallback(() => {
    passwordConfirmRef.current?.focus();
  }, []);

  const onChangePasswordConfirm = useCallback((passwordConfirm: string) => {
    setPasswordConfirm(deleteWhitespace(passwordConfirm));
  }, []);

  const onSignUp = useCallback(async () => {
    try {
      await signup({ photo, email, displayName, password });

      navigation.reset({ routes: [{ name: 'SignIn' }] });
    } catch (e) {
      Alert.alert('SignUp Error', e.message);
    }
  }, [photo, email, displayName, password, navigation]);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Container>
        <Image isPhoto uri={photo} onChangePhoto={onChangePhoto} />

        <Input
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={onChangeEmail}
          onSubmitEditing={onSubmitEmail}
        />

        <Input
          ref={nameRef}
          label="Name"
          placeholder="Name"
          maxLength={4}
          returnKeyType="next"
          value={displayName}
          onChangeText={onChangeDisplayName}
          onSubmitEditing={onSubmitDisplayName}
        />

        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
          value={password}
          onChangeText={onChangePassword}
          onSubmitEditing={onSubmitPassword}
        />

        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          placeholder="Password Confirm"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={onChangePasswordConfirm}
          onSubmitEditing={onSignUp}
        />

        <ErrorMessage>{errorMessage}</ErrorMessage>

        <Button disabled={disabled} onPress={onSignUp}>
          SignUp
        </Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default memo(SignUp);
