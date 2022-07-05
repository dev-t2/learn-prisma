import { memo } from 'react';
import { Text, View } from 'react-native';

const Greeting = () => {
  return (
    <View>
      <Text>Greeting Component</Text>
    </View>
  );
};

export default memo(Greeting);
