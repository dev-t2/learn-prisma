import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

interface IGreeting {
  name?: string;
}

const Greeting: FC<IGreeting> = ({ name = 'React Native' }) => {
  return (
    <>
      <View>
        <Text>Hello {name}</Text>
      </View>

      <Text>Extra Text</Text>
    </>
  );
};

export default memo(Greeting);
