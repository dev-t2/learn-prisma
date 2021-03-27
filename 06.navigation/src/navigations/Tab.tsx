import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Mail, Meet, Settings } from '../screens';

const Tab = createBottomTabNavigator();

interface ITabIcon {
  name: any;
  size: number;
  color: string;
}

const TabIcon = ({ name, size, color }: ITabIcon) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        showLabel: false,
        style: {
          backgroundColor: '#54b7f9',
          borderTopColor: '#fff',
          borderTopWidth: 2,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#cfcfcf',
      }}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'email' : 'email-outline',
            }),
        }}
      />

      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'video' : 'video-outline',
            }),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props =>
            TabIcon({ ...props, name: props.focused ? 'cog' : 'cog-outline' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(TabNavigation);
