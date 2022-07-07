import React, { FC, memo, ReactNode, useMemo } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import styled from '@emotion/native';

const StyledSafeAreaView = styled(SafeAreaView)({ flex: 1 });

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  const edges = useMemo<Edge[]>(() => ['bottom'], []);

  return <StyledSafeAreaView edges={edges}>{children}</StyledSafeAreaView>;
};

export default memo(Container);
