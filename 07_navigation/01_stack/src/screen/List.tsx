import React, { memo } from 'react';
import styled from '@emotion/native';

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
  return (
    <Container>
      <StyledText>List</StyledText>

      {items.map(({ id, name }) => (
        <Button key={id}>{name}</Button>
      ))}
    </Container>
  );
};

export default memo(List);
