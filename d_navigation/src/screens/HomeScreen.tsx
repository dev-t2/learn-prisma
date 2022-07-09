import React, { memo, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from './RootStack';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = useCallback(
    (id: number) => () => {
      navigation.navigate('Detail', { id });
    },
    [navigation],
  );

  return (
    <View>
      <Pressable onPress={onPress(1)}>
        <Text>Detail Screen ID 1</Text>
      </Pressable>

      <Pressable onPress={onPress(2)}>
        <Text>Detail Screen ID 2</Text>
      </Pressable>

      <Pressable onPress={onPress(3)}>
        <Text>Detail Screen ID 3</Text>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
