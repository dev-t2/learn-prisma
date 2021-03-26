import React, { FC, memo } from 'react';
import { RouteProp } from '@react-navigation/core';
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

interface IItem {
  route: RouteProp<StackParamList, 'Detail'>;
}

const Item: FC<IItem> = ({ route }) => {
  const {
    params: { id, name },
  } = route;
  return (
    <StyledView>
      <StyledText>Item</StyledText>
      <StyledText>ID: {id}</StyledText>
      <StyledText>NAME: {name}</StyledText>
    </StyledView>
  );
};

export default memo(Item);
