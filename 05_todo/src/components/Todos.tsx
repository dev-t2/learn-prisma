import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.ScrollView({
  flex: 1,
  width: '100%',
  paddingHorizontal: 10,
  marginVertical: 10,
});

interface ITodos {
  children: ReactNode;
}

const Todos: FC<ITodos> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(Todos);
