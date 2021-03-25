import React, { memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

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

const List = () => {
  const onPress = useCallback(
    (item: { id: number; name: string }) => () => {
      console.log(item);
    },
    []
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
