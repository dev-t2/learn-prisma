/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useCallback, useState } from 'react';

import { Container, Counter } from './src/components';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <Container>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </Container>
  );
};

export default memo(App);
