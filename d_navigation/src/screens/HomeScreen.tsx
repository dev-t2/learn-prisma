import React, { memo, useCallback } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { RootStackNavigationProp } from '../RootStack';

const StyledText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  marginTop: 16,
});

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
        <StyledText>Detail Screen ID 1</StyledText>
      </Pressable>

      <Pressable onPress={onPress(2)}>
        <StyledText>Detail Screen ID 2</StyledText>
      </Pressable>

      <Pressable onPress={onPress(3)}>
        <StyledText>Detail Screen ID 3</StyledText>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
