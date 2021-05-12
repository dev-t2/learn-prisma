import React, { memo, useCallback } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const onPress = useCallback(() => {
    Alert.alert('Home Pressed', 'message');
  }, []);

  const onFocus = useCallback(() => {
    console.log('onFocus');
  }, []);

  const onBlur = useCallback(() => {
    console.log('onBlur');
  }, []);

  const onEndEditing = useCallback(() => {
    console.log('onEndEditing');
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

      <TextInput
        placeholder="Enter your name"
        onChangeText={console.log}
        onFocus={onFocus}
        onBlur={onBlur}
        onEndEditing={onEndEditing}
      />
    </SafeAreaView>
  );
};

export default memo(App);
