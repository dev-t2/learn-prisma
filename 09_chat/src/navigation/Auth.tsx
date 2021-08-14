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
  const theme = useTheme();

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
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={signInOptions} />
      <Screen name="SignUp" component={SignUp} options={signUpOptions} />
    </Navigator>
  );
};

export default memo(Auth);
