import React, { memo, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

interface IContainer {
  marginTop: number;
}

const Container = styled.View<IContainer>(({ theme, marginTop }) => ({
  padding: 16,
  backgroundColor: theme.colors.primary,
  marginTop,
}));

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.primaryText,
  fontWeight: 'bold',
}));

const DateHead = () => {
  const { top } = useSafeAreaInsets();

  const formattedDate = useMemo(() => {
    const today = new Date();

    return `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  }, []);

  return (
    <Container marginTop={top}>
      <StyledText>{formattedDate}</StyledText>
    </Container>
  );
};

export default memo(DateHead);
