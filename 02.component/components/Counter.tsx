import React, { FC, memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PressableButton } from '../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
});

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  const onPressIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
    setDoubleCount((prev) => prev + 2);
  }, []);

  const onPressDecrease = useCallback(() => {
    setCount((prev) => prev - 1);
    setDoubleCount((prev) => prev - 2);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Double Count: {doubleCount}</Text>

      <PressableButton title="+" onPress={onPressIncrease} />
      <PressableButton title="-" onPress={onPressDecrease} />
    </View>
  );
};

export default memo(Counter);
