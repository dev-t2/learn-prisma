import React, { FC, memo, ReactNode, useMemo } from 'react';
import { Platform } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import styled from '@emotion/native';

const StyledSafeAreaView = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
}));

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView({
  flex: 1,
});

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  const edges = useMemo<Edge[]>(() => ['bottom'], []);

  const behavior = useMemo(() => (Platform.OS === 'ios' ? 'padding' : undefined), []);

  return (
    <StyledSafeAreaView edges={edges}>
      <StyledKeyboardAvoidingView behavior={behavior}>{children}</StyledKeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default memo(Container);
