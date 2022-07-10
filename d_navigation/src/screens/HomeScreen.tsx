import React, { memo, useCallback } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { RootStackNavigationProp } from '../RootStack';

const StyledText = styled.Text({
  fontSize: 24,
  textAlign: 'center',
  marginTop: 16,
});

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onDetail = useCallback(
    (id: number) => () => {
      navigation.navigate('Detail', { id });
    },
    [navigation],
  );

  const onHeaderless = useCallback(() => {
    navigation.push('Headerless');
  }, [navigation]);

  return (
    <View>
      <Pressable onPress={onDetail(1)}>
        <StyledText>Detail Screen</StyledText>
      </Pressable>

      <Pressable onPress={onHeaderless}>
        <StyledText>Headerless Screen</StyledText>
      </Pressable>
    </View>
  );
};

export default memo(HomeScreen);
