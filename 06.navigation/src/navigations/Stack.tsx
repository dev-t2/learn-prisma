import React, { memo } from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home, Item, List } from '../screens';

export type StackParamList = {
  Home: undefined;
  Detail: { id: number; name: string };
  List: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const style = { color: '#fff', fontSize: 24 };

const screenOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: '#fff' },
  headerStyle: {
    height: 110,
    backgroundColor: '#95a5a6',
    borderBottomWidth: 4,
    borderBottomColor: '#34495e',
  },
  headerTitleAlign: 'center',
  headerTitle: () => <MaterialCommunityIcons name="react" style={style} />,
};

const options = {
  headerTitle: 'List Screen',
  headerBackTitleVisible: true,
  headerBackTitle: 'Prev',
  headerTitleStyle: { fontSize: 24 },
  headerTintColor: '#e74c3c',
  headerBackImage: ({ tintColor }: { tintColor: string }) => {
    const style = {
      marginRight: 5,
      marginLeft: Platform.OS === 'ios' ? 11 : 0,
    };

    return (
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={30}
        color={tintColor}
        style={style}
      />
    );
  },
};

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Item} />
      <Stack.Screen name="List" component={List} options={options} />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
