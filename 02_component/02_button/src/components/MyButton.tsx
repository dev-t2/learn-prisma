import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
});

const MyButton = () => {
  const onPress = useCallback(() => {
    alert('My Button Click!!');
  }, []);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>My Button</Text>
    </Pressable>
  );
};

export default memo(MyButton);
