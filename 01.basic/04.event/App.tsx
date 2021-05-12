import React, { memo, useCallback } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const onPress = useCallback(() => {
    Alert.alert('Home Pressed', 'message');
  }, []);

  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />

      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable onPress={onPress}>
        <Text>Pressable</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default memo(App);
