import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { RootState } from '../redux/rootReducer';
import Main from './Main';
import Auth from './Auth';
import { Spinner } from '../components';

const Navigation = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      {user ? <Main /> : <Auth />}

      {isLoading && <Spinner />}
    </NavigationContainer>
  );
};

export default memo(Navigation);
