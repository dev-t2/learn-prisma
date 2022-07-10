import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

const HeaderLeft = () => {
  return (
    <Pressable>
      <Text>Left</Text>
    </Pressable>
  );
};

export default memo(HeaderLeft);
