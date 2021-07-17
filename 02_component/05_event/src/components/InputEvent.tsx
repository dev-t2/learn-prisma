import React, { memo, useCallback } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

const InputEvent = () => {
  const onChangeText = useCallback(text => {
    console.log(text);
  }, []);

  return <TextInput style={styles.input} onChangeText={onChangeText} />;
};

export default memo(InputEvent);
