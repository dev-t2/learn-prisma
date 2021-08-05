import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Chat, Home, List } from '../screen';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Chat: { id: number; name: string };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type ListScreenRouteProp = RouteProp<RootStackParamList, 'List'>;
export type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

export type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;
export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      cardStyle: { backgroundColor: '#fff' },
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="List" component={List} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
};

export default memo(Stack);
