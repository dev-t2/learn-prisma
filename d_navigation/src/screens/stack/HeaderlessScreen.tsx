import React, { memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from '../RootStack';

const HeaderlessScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Headerless Screen</Text>

      <Pressable onPress={onPress}>
        <Text>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default memo(HeaderlessScreen);
