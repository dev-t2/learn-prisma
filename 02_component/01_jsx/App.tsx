import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
  },
});

const App = () => {
  const name = 'React Native';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default memo(App);
