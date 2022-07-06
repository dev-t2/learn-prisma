import React, { FC, memo, useMemo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  padding: 16,
  backgroundColor: '#0d47a1',
});

const Date = styled.Text({
  fontSize: 24,
  color: '#fff',
});

interface IDateHead {
  date: Date;
}

const DateHead: FC<IDateHead> = ({ date }) => {
  const formatted = useMemo(() => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  }, [date]);

  return (
    <Container>
      <Date>{formatted}</Date>
    </Container>
  );
};

export default memo(DateHead);
