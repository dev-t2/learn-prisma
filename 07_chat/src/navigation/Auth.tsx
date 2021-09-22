import React, { memo, useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from '@emotion/react';

import { SignIn, SignUp } from '../screen';

type ParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInRoute = RouteProp<ParamList, 'SignIn'>;
export type SignInNavigation = StackNavigationProp<ParamList, 'SignIn'>;

export type SignUpRoute = RouteProp<ParamList, 'SignUp'>;
export type SignUpNavigation = StackNavigationProp<ParamList, 'SignUp'>;

const { Navigator, Screen } = createStackNavigator<ParamList>();

const Auth = () => {
  const theme = useTheme();

  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      cardStyle: {
        backgroundColor: theme.background,
      },
    }),
    [theme.background]
  );

  const signInOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  const signUpOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: theme.text,
      headerLeft: ({ tintColor, onPress }) => (
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color={tintColor}
          onPress={onPress}
        />
      ),
    }),
    [theme.text]
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="SignIn" component={SignIn} options={signInOptions} />
      <Screen name="SignUp" component={SignUp} options={signUpOptions} />
    </Navigator>
  );
};

export default memo(Auth);
