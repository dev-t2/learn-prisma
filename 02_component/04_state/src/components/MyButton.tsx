import React, { FC, memo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

interface IMyButton {
  title: string;
  onPress: () => void;
}

const MyButton: FC<IMyButton> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default memo(MyButton);
