import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
};

export default memo(RootStack);
