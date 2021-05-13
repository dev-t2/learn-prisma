import React, { memo } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: { fontSize: 20, color: 'white' },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>Hello StyleSheet API</Text>
    </SafeAreaView>
  );
};

export default memo(App);
