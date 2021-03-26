import React, { memo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { Home, Item, List } from '../screens';

export type StackParamList = {
  Home: undefined;
  Detail: { id: number; name: string };
  List: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: '#fff' },
  headerStyle: {
    height: 110,
    backgroundColor: '#95a5a6',
    borderBottomWidth: 4,
    borderBottomColor: '#34495e',
  },
  headerTitleStyle: { color: '#fff', fontSize: 24 },
  headerTitleAlign: 'center',
};

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Item} />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerTitle: 'List Screen' }}
      />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
