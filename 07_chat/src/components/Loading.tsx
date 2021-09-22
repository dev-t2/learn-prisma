import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
  zIndex: 1,
  opacity: 0.8,
}));

const Loading = () => {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.main} />
    </Container>
  );
};

export default memo(Loading);
