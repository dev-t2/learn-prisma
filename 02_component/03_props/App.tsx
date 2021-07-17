import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
    alert('Click!!');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MyButton title="My Button 1" />
      <MyButton>My Button 2</MyButton>
      <MyButton />
      <MyButton onPress={onPress} />
    </View>
  );
};

export default memo(App);
