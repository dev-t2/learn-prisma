import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { RootState } from '../redux/rootReducer';
import Main from './Main';
import Auth from './Auth';

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>{user ? <Main /> : <Auth />}</NavigationContainer>
  );
};

export default memo(Navigation);
