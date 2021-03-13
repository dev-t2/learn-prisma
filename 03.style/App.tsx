import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { viewStyles } from './src/styles';
import ShadowBox from './src/components/ShadowBox';

const App: FC = () => {
  return (
    <View style={viewStyles.container}>
      <ShadowBox />
    </View>
  );
};

export default memo(App);
