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

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInScreenRouteProp = RouteProp<AuthStackParamList, 'SignIn'>;
export type SignInScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignIn'
>;

export type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'SignUp'>;
export type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

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
