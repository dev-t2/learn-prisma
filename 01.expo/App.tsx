import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  );
};

export default memo(App);
