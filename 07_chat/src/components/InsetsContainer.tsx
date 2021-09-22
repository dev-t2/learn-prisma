import React, { FC, memo, ReactNode, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from '@emotion/native';

interface IContainer {
  isInsets: boolean;
  insets: EdgeInsets;
}

const Container = styled.View<IContainer>(({ theme, isInsets, insets }) => ({
  flex: 1,
  paddingTop: isInsets ? insets.top : 0,
  paddingBottom: isInsets ? insets.bottom : 0,
  backgroundColor: theme.background,
}));

const StyledScrollView = styled.ScrollView({
  paddingHorizontal: 20,
});

interface IInsetsContainer {
  children: ReactNode;
  isInsets?: boolean;
}

const InsetsContainer: FC<IInsetsContainer> = ({
  children,
  isInsets = true,
}) => {
  const insets = useSafeAreaInsets();

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({ alignItems: 'center' }),
    []
  );

  return (
    <Container isInsets={isInsets} insets={insets}>
      <StyledScrollView>
        <KeyboardAwareScrollView
          enableOnAndroid
          contentContainerStyle={contentContainerStyle}
        >
          {children}
        </KeyboardAwareScrollView>
      </StyledScrollView>
    </Container>
  );
};

export default memo(InsetsContainer);
