import React, { FC, memo, useMemo } from 'react';
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

const Date = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.colors.primaryText,
}));

interface IDateHead {
  date: Date;
}

const DateHead: FC<IDateHead> = ({ date }) => {
  const { top } = useSafeAreaInsets();

  const formattedDate = useMemo(() => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  }, [date]);

  return (
    <Container marginTop={top}>
      <Date>{formattedDate}</Date>
    </Container>
  );
};

export default memo(DateHead);
