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
  zIndex: 1,
  backgroundColor: theme.spinner,
  opacity: 0.4,
}));

const Spinner = () => {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.white} />
    </Container>
  );
};

export default memo(Spinner);
