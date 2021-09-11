import React, { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { ChannelList, Profile } from '../screen';

type HomeStackParamList = {
  ChannelList: undefined;
  Profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<HomeStackParamList>();

const Home = () => {
  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="ChannelList" component={ChannelList} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default memo(Home);
