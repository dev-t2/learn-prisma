import React, { FC, memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#f1c40f',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

const EventButton: FC = () => {
  const onPressIn = useCallback(() => {
    console.log('onPressIn');
  }, []);

  const onPressOut = useCallback(() => {
    console.log('onPressOut');
  }, []);

  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);

  const onLongPress = useCallback(() => {
    console.log('onLongPress');
  }, []);

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      delayLongPress={3000}
      onLongPress={onLongPress}
    >
      <Text>Press</Text>
    </Pressable>
  );
};

export default memo(EventButton);
