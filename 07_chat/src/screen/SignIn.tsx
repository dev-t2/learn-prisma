import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert, StyleProp, TextInput, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignInScreenNavigationProp } from '../navigation/Auth';
import { signIn } from '../firebase';
import { deleteWhitespace, validateEmail } from '../api';
import {
  Button,
  ErrorMessage,
  Image,
  Input,
  Loading,
  TextButton,
} from '../components';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef<TextInput>(null);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({ flex: 1 }),
    []
  );

  useEffect(() => {
    setIsValid(!!email && !!password && !errorMessage);
  }, [email, password, errorMessage]);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(deleteWhitespace(email));

    const validatedEmail = validateEmail(email);

    setErrorMessage(validatedEmail ? '' : 'Please verify your email');
  }, []);

  const onSubmitEmail = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(deleteWhitespace(password));
  }, []);

  const onSignIn = useCallback(async () => {
    try {
      setIsLoading(true);

      // const user = await signIn({ email, password });
      await signIn({ email, password });
    } catch (e) {
      Alert.alert('SignIn Error');
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      contentContainerStyle={contentContainerStyle}
    >
      <Container insets={insets}>
        {isLoading && <Loading />}

        <Image uri={logo} />

        <Input
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={onChangeEmail}
          onSubmitEditing={onSubmitEmail}
        />

        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Password"
          secureTextEntry
          returnKeyType="done"
          value={password}
          onChangeText={onChangePassword}
          onSubmitEditing={onSignIn}
        />

        <ErrorMessage>{errorMessage}</ErrorMessage>

        <Button disabled={!isValid} onPress={onSignIn}>
          SignIn
        </Button>

        <TextButton onPress={onSignUp}>SignUp</TextButton>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default memo(SignIn);
