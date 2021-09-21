import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { HomeScreenNavigationProp } from '../navigation/Main';
import { ChannelType, firestore } from '../firebase';
import { ChannelItem } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const ChannelList = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [channels, setChannels] = useState<ChannelType[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('channels')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        setChannels(snapshot.docs.map((doc) => doc.data() as ChannelType));
      });

    return () => unsubscribe();
  }, []);

  const onPress = useCallback(
    (item: ChannelType) => () => {
      navigation.navigate('Channel', { id: item.id, title: item.title });
    },
    [navigation]
  );

  const renderItem = useCallback<ListRenderItem<ChannelType>>(
    ({ item }) => {
      return <ChannelItem item={item} onPress={onPress(item)} />;
    },
    [onPress]
  );

  const keyExtractor = useCallback((item: ChannelType) => item.id, []);

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
