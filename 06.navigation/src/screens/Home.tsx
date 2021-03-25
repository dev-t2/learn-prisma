import React, { FC, memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';

import { StackParamList } from '../navigations/Stack';

const StyledView = styled.View({
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  marginBottom: 10,
});

interface IHome {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const Home: FC<IHome> = ({ navigation }) => {
  const onPress = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <StyledView>
      <StyledText>Home</StyledText>
      <Pressable onPress={onPress}>
        <Text>go to the list screen</Text>
      </Pressable>
    </StyledView>
  );
};

export default memo(Home);
