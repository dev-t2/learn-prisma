import React, { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { FlatList } from 'react-native';
import { Channel } from '../components';

const channels = Array(1000)
  .fill(null)
  .map((_, index) => {
    const date = Date.now();

    return {
      id: index,
      title: `title ${index}`,
      description: `description ${index}`,
      createdAt: date,
      updatedAt: date,
    };
  });

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const ChannelList = () => {
  const onPress = useCallback(() => {}, []);

  const renderItem = useCallback(
    ({ item }) => <Channel item={item} onPress={onPress} />,
    [onPress]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <Container>
      <FlatList
        data={channels}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        windowSize={3}
      />
    </Container>
  );
};

export default memo(ChannelList);
