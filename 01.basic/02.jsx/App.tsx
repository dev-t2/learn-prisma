import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

export default function App() {
  const children = new Array(100)
    .fill(null)
    .map((_, index) => <Text>Hello World! {index}</Text>);

  return (
    <SafeAreaView>
      <StatusBar />

      {children}
    </SafeAreaView>
  );
}
