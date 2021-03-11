import React, { FC, memo, useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    margin: 8,
    fontSize: 32,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
  },
});

const EventInput: FC = () => {
  const [text, setText] = useState('');

  const onChangeText = useCallback((text) => {
    setText(text);
  }, []);

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a text..."
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default memo(EventInput);
