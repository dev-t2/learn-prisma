import React, { memo, useCallback } from 'react';
import { Alert, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const onPress = useCallback(() => {
    Alert.alert('Home Pressed', 'message');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />

      <Button title="Home" onPress={onPress} />
    </SafeAreaView>
  );
};

export default memo(App);
