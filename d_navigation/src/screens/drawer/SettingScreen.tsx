import React, { memo, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RootDrawerNavigationProp } from '../RootDrawer';

const SettingScreen = () => {
  const navigation = useNavigation<RootDrawerNavigationProp>();

  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Text>Setting Screen</Text>

      <Pressable onPress={onPress}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};

export default memo(SettingScreen);
