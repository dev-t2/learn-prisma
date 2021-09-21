import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { ListScreenNavigationProp } from '../navigation/Stack';
import { Button } from '../components';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  margin: 10,
});

const items = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'Expo' },
  { id: 3, name: 'TypeScript' },
];

const List = () => {
  const navigation = useNavigation<ListScreenNavigationProp>();

  const onPress = useCallback(
    (id: number, name: string) => () => {
      navigation.navigate('Chat', { id, name });
    },
    [navigation]
  );

  return (
    <Container>
      <StyledText>List</StyledText>

      {items.map(({ id, name }) => (
        <Button key={id} onPress={onPress(id, name)}>
          {name}
        </Button>
      ))}
    </Container>
  );
};

export default memo(List);
