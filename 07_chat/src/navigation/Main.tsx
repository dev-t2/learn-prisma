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

type MainStackParamList = {
  Home: undefined;
  CreateChannel: undefined;
  Channel: { id: string; title: string };
};

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Home'
>;

export type CreateChannelScreenRouteProp = RouteProp<
  MainStackParamList,
  'CreateChannel'
>;
export type CreateChannelScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'CreateChannel'
>;

export type ChannelScreenRouteProp = RouteProp<MainStackParamList, 'Channel'>;
export type ChannelScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Channel'
>;

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

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

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="CreateChannel" component={CreateChannel} />
      <Screen name="Channel" component={Channel} />
    </Navigator>
  );
};

export default memo(Main);
