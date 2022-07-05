import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

export default memo(Container);
