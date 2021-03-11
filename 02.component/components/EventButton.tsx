import React, { FC, memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#1abc9c',
    padding: 8,
  },
  text: {
    padding: 8,
    fontSize: 32,
  },
});

interface IEventButton {
  title: string;
}

const pressRetentionOffset = { top: 50, right: 50, bottom: 50, left: 50 };

const EventButton: FC<IEventButton> = ({ title }) => {
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
      pressRetentionOffset={pressRetentionOffset}
      hitSlop={50}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default memo(EventButton);
