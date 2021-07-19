import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

import Button from './Button';

const StyledText = styled.Text({
  fontSize: 25,
  margin: 10,
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const onPlus = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }, []);

  const onMinus = useCallback(() => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <>
      <StyledText>count: {count}</StyledText>

      <Button title="+" onPress={onPlus} />
      <Button title="-" onPress={onMinus} />
    </>
  );
};

export default memo(Counter);
