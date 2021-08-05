import React, { memo, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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
