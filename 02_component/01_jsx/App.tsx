import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const name = 'React Native';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 30 }}>
        {name === 'React Native' ? name : 'React'}
      </Text>

      {name === 'React Native' && <Text style={{ fontSize: 30 }}>{name}</Text>}
      {name !== 'React Native' && <Text style={{ fontSize: 30 }}>React</Text>}
    </View>
  );
};

export default memo(App);
