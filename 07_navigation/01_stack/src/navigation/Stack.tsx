import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      headerStyle: {
        height: 120,
        backgroundColor: '#555',
        borderBottomWidth: 5,
        borderBottomColor: '#111',
      },
      headerTitleStyle: {
        fontSize: 25,
        // color: '#fff',
      },
      headerTitleAlign: 'center',
      headerTitle: () => (
        <MaterialCommunityIcons name="react" color="#ff6600" size={25} />
      ),
      headerBackTitle: 'Prev',
      headerBackTitleVisible: true,
      headerBackTitleStyle: { fontSize: 25 },
      headerTintColor: '#ff6600',
    }),
    []
  );

  const homeOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  const chatOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerTitle: 'Chat Screen',
      headerBackImage: () => (
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          color="#ff6600"
          style={{ marginHorizontal: 10 }}
        />
      ),
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} options={homeOptions} />
      <Screen name="List" component={List} />
      <Screen name="Chat" component={Chat} options={chatOptions} />
    </Navigator>
  );
};

export default memo(Stack);
