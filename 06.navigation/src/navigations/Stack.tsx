import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Item, List } from '../screens';

export type StackParamList = {
  Home: undefined;
  Item: { id: number; name: string };
  List: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const screenOptions = { cardStyle: { backgroundColor: '#fff' } };

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
