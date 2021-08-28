import React, { memo, useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from '@emotion/react';

import { Profile, SignIn, SignUp } from '../screen';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
};

export type SignInScreenRouteProp = RouteProp<RootStackParamList, 'SignIn'>;
export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

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
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default memo(Auth);
