import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

const Footer: FC = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

export default memo(Footer);
