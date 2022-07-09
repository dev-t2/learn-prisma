import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { DetailScreenRouteProp } from './RootStack';

const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();

  return (
    <View>
      <Pressable>
        <Text>Detail ID: {params.id}</Text>
      </Pressable>
    </View>
  );
};

export default memo(DetailScreen);
