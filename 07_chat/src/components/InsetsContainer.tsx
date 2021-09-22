import React, { FC, memo, ReactNode, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from '@emotion/native';

interface IContainer {
  insets: EdgeInsets;
}

const Container = styled.View<IContainer>(({ theme, insets }) => ({
  flex: 1,
  paddingTop: insets.top,
  paddingBottom: insets.bottom,
  paddingHorizontal: 20,
  backgroundColor: theme.background,
}));

interface IInsetsContainer {
  children: ReactNode;
}

const InsetsContainer: FC<IInsetsContainer> = ({ children }) => {
  const insets = useSafeAreaInsets();

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    []
  );

  return (
    <Container insets={insets}>
      <KeyboardAwareScrollView
        enableOnAndroid
        contentContainerStyle={contentContainerStyle}
      >
        {children}
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default memo(InsetsContainer);
