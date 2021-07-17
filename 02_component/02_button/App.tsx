import React, { memo } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';

import MyButton from './src/components/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const onPress = useCallback(() => {
    alert('Button Click!!');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button title="Button" onPress={onPress} />
      <MyButton />
    </View>
  );
};

export default memo(App);
