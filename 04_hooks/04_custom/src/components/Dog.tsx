import React, { memo, useMemo } from 'react';
import styled from '@emotion/native';

import { useFetch } from '../hooks/useFetch';

const StyledImage = styled.Image({
  width: 300,
  height: 300,
  backgroundColor: '#7f8c8d',
});

const ErrorText = styled.Text({
  fontSize: 18,
  color: '#e74c3c',
});

const LoadingText = styled.Text({
  fontSize: 18,
  color: '#2ecc71',
});

const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
  const { data, error, isLoading } = useFetch(URL);

  const source = useMemo(() => {
    if (data?.message) {
      return { uri: data.message };
    }

    return { uri: '' };
  }, [data?.message]);

  return (
    <>
      {isLoading && <LoadingText>로딩 중...</LoadingText>}
      {data && <StyledImage source={source} />}
      {error && <ErrorText>{error.message}</ErrorText>}
    </>
  );
};

export default memo(Dog);
