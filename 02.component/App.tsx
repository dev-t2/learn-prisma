import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { EventButton } from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <EventButton title="Pressable" />
    </View>
  );
};

export default memo(App);
