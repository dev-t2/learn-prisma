import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

const Contents: FC = () => {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
    </View>
  );
};

export default memo(Contents);
