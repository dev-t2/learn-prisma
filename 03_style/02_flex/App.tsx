import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Contents, Footer, Header } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default memo(App);
