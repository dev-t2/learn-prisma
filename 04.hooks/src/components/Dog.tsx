import React, { memo, useMemo } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { useAxios } from '../hooks';

const StyledLoading = styled.Text({
  fontSize: 24,
  color: '#000',
});

const StyledImage = styled.Image({
  width: 320,
  height: 320,
  backgroundColor: '#7f8c8d',
});

const StyledError = styled.Text({
  fontSize: 16,
  color: '#e74c3c',
});

const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
  const [isLoading, data, error] = useAxios(URL);

  const source = useMemo(() => ({ uri: data?.message }), [data?.message]);

  return isLoading ? (
    <StyledLoading>로딩 중...</StyledLoading>
  ) : (
    <>
      <StyledImage source={source} />
      <StyledError>{error?.message}</StyledError>
    </>
  );
};

export default memo(Dog);
