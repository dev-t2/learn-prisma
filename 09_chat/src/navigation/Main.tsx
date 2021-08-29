import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from '@emotion/react';

import { Profile } from '../screen';

type MainStackParamList = {
  Profile: undefined;
};

export type ProfileScreenRouteProp = RouteProp<MainStackParamList, 'Profile'>;
export type ProfileScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Profile'
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
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default memo(Main);
