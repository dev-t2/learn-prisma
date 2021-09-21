import React, { FC, memo, useMemo } from 'react';
import { GestureResponderEvent } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { ChannelType } from '../firebase';
import { getDateOrTime } from '../api';

const Container = styled.Pressable(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.gray1,
  paddingVertical: 15,
  paddingHorizontal: 20,
}));

const TextContainer = styled.View({
  flex: 1,
});

const Title = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontWeight: '600',
  color: theme.text,
}));

const Description = styled.Text(({ theme }) => ({
  fontSize: 16,
  marginTop: 5,
  color: theme.gray2,
}));

const Time = styled.Text(({ theme }) => ({
  fontSize: 12,
  color: theme.gray2,
  marginRight: 10,
}));

interface IChannelItem {
  item: ChannelType;
  onPress: (event: GestureResponderEvent) => void;
}

const ChannelItem: FC<IChannelItem> = ({ item, onPress }) => {
  const theme = useTheme();

  const time = useMemo(() => getDateOrTime(item.createdAt), [item.createdAt]);

  return (
    <Container onPress={onPress}>
      <TextContainer>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </TextContainer>

      <Time>{time}</Time>

      <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.text} />
    </Container>
  );
};

export default memo(ChannelItem);
