import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style';

const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

export default memo(Footer);
