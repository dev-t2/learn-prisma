import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MyButton from './src/components/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

const App = () => {
  const [count, setCount] = useState(0);

  const onPlus = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const onMinus = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>{count}</Text>

      <MyButton title="+1" onPress={onPlus} />
      <MyButton title="-1" onPress={onMinus} />
    </View>
  );
};

export default memo(App);
