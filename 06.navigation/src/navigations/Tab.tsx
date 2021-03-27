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
    <Tab.Navigator>
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: 'email' }),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: 'video' }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: 'cog' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(TabNavigation);
