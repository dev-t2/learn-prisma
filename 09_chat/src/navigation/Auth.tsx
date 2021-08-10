import React, { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { SignIn, SignUp } from '../screen';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
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

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Auth = () => {
  const signInOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={signInOptions} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default memo(Auth);
