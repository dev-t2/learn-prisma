import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: { padding: 10, fontSize: 25, fontWeight: '600', color: 'black' },
  error: { color: 'red' },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Inline Style - Text</Text>
      <Text style={[styles.text, styles.error]}>Inline Style - Error</Text>
      <Text style={[styles.text, { color: 'green' }]}>Inline Style - Text</Text>
    </View>
  );
};

export default memo(App);
