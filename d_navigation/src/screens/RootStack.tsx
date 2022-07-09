import React, { memo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
};

export default memo(RootStack);
