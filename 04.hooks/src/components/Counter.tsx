import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components/native';

import Button from './Button';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 10,
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const onPressPlus = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const onPressMinus = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <>
      <StyledText>count: {count}</StyledText>

      <Button title="+" onPress={onPressPlus} />

      <Button title="-" onPress={onPressMinus} />
    </>
  );
};

export default memo(Counter);
