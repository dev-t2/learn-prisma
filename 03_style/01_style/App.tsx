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
});

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <StatusBar style="auto" />

      <Text
        style={{ padding: 10, fontSize: 25, fontWeight: '600', color: 'black' }}
      >
        Inline Style - Text
      </Text>

      <Text
        style={{ padding: 10, fontSize: 25, fontWeight: '600', color: 'red' }}
      >
        Inline Style - Error
      </Text>
    </View>
  );
};

export default memo(App);
