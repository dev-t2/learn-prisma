import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { HomeNavigation } from '../navigation/Main';
import { ChannelType, firestore } from '../firebase';
import { ChannelItem } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const ChannelList = () => {
  const navigation = useNavigation<HomeNavigation>();

  const [channelList, setChannelList] = useState<ChannelType[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('channels')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        setChannelList(snapshot.docs.map((doc) => doc.data() as ChannelType));
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
        data={channelList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default memo(ChannelList);
