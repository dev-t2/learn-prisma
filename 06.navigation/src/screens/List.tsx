import React, { FC, memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';

import { StackParamList } from '../navigations/Stack';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  marginBottom: 10,
});

const items = [
  { id: 1, name: 'React' },
  { id: 2, name: 'React Native' },
  { id: 3, name: 'React Navigation' },
];

interface IList {
  navigation: StackNavigationProp<StackParamList, 'List'>;
}

const List: FC<IList> = ({ navigation }) => {
  const onPress = useCallback(
    (item: { id: number; name: string }) => () => {
      const { id, name } = item;

      navigation.navigate('Detail', { id, name });
    },
    [navigation]
  );

  return (
    <StyledView>
      <StyledText>List</StyledText>
      {items.map(item => (
        <Pressable key={item.id} onPress={onPress(item)}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </StyledView>
  );
};

export default memo(List);
