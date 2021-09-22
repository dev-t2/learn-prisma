import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from '@emotion/react';

import Home from './Home';
import { Channel, CreateChannel } from '../screen';

type ParamList = {
  Home: undefined;
  CreateChannel: undefined;
  Channel: { id: string; title: string };
};

export type HomeRoute = RouteProp<ParamList, 'Home'>;
export type HomeNavigation = StackNavigationProp<ParamList, 'Home'>;

export type CreateChannelRoute = RouteProp<ParamList, 'CreateChannel'>;
export type CreateChannelNavigation = StackNavigationProp<
  ParamList,
  'CreateChannel'
>;

export type ChannelRoute = RouteProp<ParamList, 'Channel'>;
export type ChannelNavigation = StackNavigationProp<ParamList, 'Channel'>;

const { Navigator, Screen } = createStackNavigator<ParamList>();

const Main = () => {
  const theme = useTheme();

  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerTitleAlign: 'center',
      headerTintColor: theme.text,
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: theme.background,
      },
    }),
    [theme.text, theme.background]
  );

  const createChannelOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerTitle: '채팅방 생성',
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen
        name="CreateChannel"
        component={CreateChannel}
        options={createChannelOptions}
      />
      <Screen name="Channel" component={Channel} />
    </Navigator>
  );
};

export default memo(Main);
