import React, { memo, useCallback } from 'react';
import { Pressable } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SignInScreenNavigationProp } from '../navigation/Auth';

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
  fontSize: 20,
  color: theme.text,
}));

const SignIn = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container insets={insets}>
      <StyledText>SignIn</StyledText>

      <Pressable onPress={onPress}>
        <StyledText>SignUp</StyledText>
      </Pressable>
    </Container>
  );
};

export default memo(SignIn);
