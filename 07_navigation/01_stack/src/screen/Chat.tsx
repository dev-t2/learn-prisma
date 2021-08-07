import React, { memo, useCallback, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from '@emotion/native';

import {
  ChatScreenNavigationProp,
  ChatScreenRouteProp,
} from '../navigation/Stack';
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

const Chat = () => {
  const { params } = useRoute<ChatScreenRouteProp>();
  const navigation = useNavigation<ChatScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            style={{ marginLeft: 10 }}
            color={tintColor}
            onPress={() => navigation.goBack()}
          />
        );
      },
      headerRight: ({ tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="home"
            size={30}
            style={{ marginRight: 10 }}
            color={tintColor}
            onPress={() => navigation.popToTop()}
          />
        );
      },
    });
  }, [navigation]);

  const onPress = useCallback(() => {
    navigation.reset({ routes: [{ name: 'Home' }] });
  }, [navigation]);

  return (
    <Container>
      <StyledText>Chat</StyledText>
      <StyledText>{params.id}</StyledText>
      <StyledText>{params.name}</StyledText>

      <Button onPress={onPress}>Home</Button>
    </Container>
  );
};

export default memo(Chat);
