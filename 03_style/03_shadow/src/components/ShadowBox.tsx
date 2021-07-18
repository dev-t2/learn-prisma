import React, { memo } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

const ShadowBox = () => {
  return (
    <View style={styles.shadow}>
      <Text>{Platform.OS === 'android' ? 'android' : 'ios'}</Text>
    </View>
  );
};

export default memo(ShadowBox);
