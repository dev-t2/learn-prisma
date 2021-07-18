import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../style';

const Contents = () => {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
    </View>
  );
};

export default memo(Contents);
