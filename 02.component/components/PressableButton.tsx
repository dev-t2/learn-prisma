import React, { FC, memo, ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#3498db',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

interface IPressableButton {
  children?: ReactNode;
  title?: string;
  onPress?: () => void;
}

const PressableButton: FC<IPressableButton> = ({ children, title = 'Default Title', onPress }) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Text style={styles.text}>{children || title}</Text>
    </Pressable>
  );
};

export default memo(PressableButton);
