import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View>
      <StatusBar />

      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default memo(App);
