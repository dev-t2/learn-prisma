import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { DetailScreen, HomeScreen } from './screens';

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const homeScreenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { title: 'Home Screen' };
  }, []);

  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
};

export default memo(RootStack);
