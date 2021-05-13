import React, { memo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />

      <Text>Open up App.tsx to start working on your app!</Text>
    </SafeAreaView>
  );
};

export default memo(App);
