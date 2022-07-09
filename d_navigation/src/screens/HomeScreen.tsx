import React, { memo, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from './RootStack';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Detail', { id: 1 });
  }, [navigation]);

  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>Detail Screen</Text>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
