import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  padding: 16,
  backgroundColor: '#26a69a',
});

const Date = styled.Text({
  fontSize: 24,
  color: '#fff',
});

const DateHead = () => {
  return (
    <Container>
      <Date>2022년 07월 06일</Date>
    </Container>
  );
};

export default memo(DateHead);
