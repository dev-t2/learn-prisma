import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ChannelList, Profile } from '../screen';

type HomeStackParamList = {
  ChannelList: undefined;
  Profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<HomeStackParamList>();

const Home = () => {
  return (
    <Navigator>
      <Screen name="ChannelList" component={ChannelList} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default memo(Home);
