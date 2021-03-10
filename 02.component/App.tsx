import React, { FC, memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Counter, PressableButton } from './components';

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
  const onPress = useCallback(() => {
    alert('onPress Props');
  }, []);

  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

export default memo(App);
