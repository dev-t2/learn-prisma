import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f1c40f',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

const PressEvent = () => {
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
      style={styles.button}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={3000}
    >
      <Text style={styles.text}>Press Event</Text>
    </Pressable>
  );
};

export default memo(PressEvent);
