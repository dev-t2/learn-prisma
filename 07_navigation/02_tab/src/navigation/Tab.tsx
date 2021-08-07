import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Mail, Profile, Settings } from '../screen/TabScreens';

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  return (
    <Navigator>
      <Screen name="Mail" component={Mail} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};

export default memo(Tab);
