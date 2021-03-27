import React, { FC, memo, useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  navigation: StackNavigationProp<StackParamList, 'Detail'>;
  route: RouteProp<StackParamList, 'Detail'>;
}

const Item: FC<IItem> = ({ navigation, route }) => {
  const {
    params: { id, name },
  } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={onPress}
          />
        );
      },
      headerRight: ({ tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="home-variant"
            size={30}
            style={{ marginRight: 11 }}
            color={tintColor}
            onPress={() => navigation.popToTop()}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <StyledView>
      <StyledText>Item</StyledText>
      <StyledText>ID: {id}</StyledText>
      <StyledText>NAME: {name}</StyledText>
    </StyledView>
  );
};

export default memo(Item);
