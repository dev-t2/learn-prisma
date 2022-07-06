import React, { FC, memo, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

interface IContainer {
  marginTop: number;
}

const Container = styled.View<IContainer>(({ marginTop }) => ({
  padding: 16,
  backgroundColor: '#01579b',
  marginTop,
}));

const Date = styled.Text({
  fontSize: 24,
  color: '#fff',
});

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
