import React, { FC, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { padding: 10, fontSize: 26, fontWeight: '600', color: 'black' },
});

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inline Styling - Text</Text>
    </View>
  );
};

export default memo(App);
