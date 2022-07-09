import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Pressable>
        <Text>Detail Screen</Text>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
