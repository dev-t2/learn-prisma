import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert, StyleProp, TextInput, ViewStyle } from 'react-native';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignInScreenNavigationProp } from '../navigation/Auth';
import { deleteWhitespace, validateEmail } from '../api';
import { signIn } from '../firebase';
import { setIsLoading, setUser } from '../redux/user';
import { Button, ErrorMessage, Image, Input, TextButton } from '../components';

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
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

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
      dispatch(setIsLoading({ isLoading: true }));

      const user = await signIn({ email, password });

      dispatch(setUser({ user }));
    } catch (error) {
      Alert.alert('SignIn Error');
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  }, [email, password, dispatch]);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      contentContainerStyle={contentContainerStyle}
    >
      <Container insets={insets}>
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
