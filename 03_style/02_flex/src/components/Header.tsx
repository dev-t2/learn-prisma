import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../style';

const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default memo(Header);
