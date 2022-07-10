import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

const HeaderRight = () => {
  return (
    <Pressable>
      <Text>Right</Text>
    </Pressable>
  );
};

export default memo(HeaderRight);
