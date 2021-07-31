import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />

      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default memo(App);
