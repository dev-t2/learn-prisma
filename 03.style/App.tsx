import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

import { textStyles, viewStyles } from './src/styles';

const App: FC = () => {
  return (
    <View style={viewStyles.container}>
      <Text style={textStyles.text}>Inline Styling - Text</Text>
    </View>
  );
};

export default memo(App);
