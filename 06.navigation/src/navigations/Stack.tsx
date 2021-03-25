import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Item, List } from '../screens';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
