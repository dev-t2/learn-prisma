import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

const Header: FC = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default memo(Header);
