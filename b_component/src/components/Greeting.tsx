import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

interface IGreeting {
  name: string;
}

const Greeting: FC<IGreeting> = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default memo(Greeting);
