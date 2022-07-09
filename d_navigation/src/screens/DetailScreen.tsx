import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';

const DetailScreen = () => {
  return (
    <View>
      <Pressable>
        <Text>Detail</Text>
      </Pressable>
    </View>
  );
};

export default memo(DetailScreen);
