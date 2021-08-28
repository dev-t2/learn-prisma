import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { RootState } from '../redux/rootReducer';
import Auth from './Auth';

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return <NavigationContainer>{user?.uid || <Auth />}</NavigationContainer>;
};

export default memo(Navigation);
