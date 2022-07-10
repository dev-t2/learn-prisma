import React, { memo } from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';

import { HomeScreen, SettingScreen } from './drawer';

type RootDrawerParamList = {
  Home: undefined;
  Setting: undefined;
};

export type RootDrawerNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const { Navigator, Screen } = createDrawerNavigator<RootDrawerParamList>();

const RootDrawer = () => {
  return (
    <Navigator backBehavior="history">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Setting" component={SettingScreen} />
    </Navigator>
  );
};

export default memo(RootDrawer);
