import React, { memo, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootDrawerNavigationProp } from '../RootDrawer';

const HomeScreen = () => {
  const navigation = useNavigation<RootDrawerNavigationProp>();

  const onOpen = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  const onSetting = useCallback(() => {
    navigation.navigate('Setting');
  }, [navigation]);

  return (
    <View>
      <Text>Home Screen</Text>

      <Pressable onPress={onOpen}>
        <Text>Open</Text>
      </Pressable>

      <Pressable onPress={onSetting}>
        <Text>Setting</Text>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
