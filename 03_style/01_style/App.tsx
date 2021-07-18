import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { textStyles, viewStyles } from './src/style';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <StatusBar style="auto" />

      <Text style={textStyles.text}>Inline Style - Text</Text>

      <Text style={[textStyles.text, textStyles.error]}>
        Inline Style - Error
      </Text>

      <Text style={[textStyles.text, { color: 'green' }]}>
        Inline Style - Text
      </Text>
    </View>
  );
};

export default memo(App);
