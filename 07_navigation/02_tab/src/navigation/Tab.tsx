import React, { memo, useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Mail, Profile, Settings } from '../screen/TabScreens';

const TabIcon = ({
  name,
  size,
  color,
}: {
  name: any;
  size: number;
  color: string;
}) => <MaterialIcons name={name} size={size} color={color} />;

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: {
        backgroundColor: '#0f56b3',
        borderTopColor: '#000',
        borderTopWidth: 5,
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#5096f1',
    }),
    []
  );

  const mailOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color, focused }) =>
        TabIcon({ name: focused ? 'mail' : 'mail-outline', size, color }),
      tabBarLabel: 'Inbox',
    }),
    []
  );

  const profileOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color }) => TabIcon({ name: 'person', size, color }),
    }),
    []
  );

  const settingsOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color }) =>
        TabIcon({ name: 'settings', size, color }),
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Mail" component={Mail} options={mailOptions} />
      <Screen name="Profile" component={Profile} options={profileOptions} />
      <Screen name="Settings" component={Settings} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(Tab);
