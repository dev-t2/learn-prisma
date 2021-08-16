import React, { memo, useCallback } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignInScreenNavigationProp } from '../navigation/Auth';
import { Button, Image, TextButton } from '../components';

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

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.text,
  marginTop: 30,
}));

const SignIn = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container insets={insets}>
      <Image />

      <StyledText>SignIn</StyledText>

      <Button onPress={onSignUp}>SignIn</Button>
      <TextButton onPress={onSignUp}>SignUp</TextButton>
    </Container>
  );
};

export default memo(SignIn);
