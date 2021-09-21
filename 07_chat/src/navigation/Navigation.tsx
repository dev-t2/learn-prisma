import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../firebase';
import Main from './Main';
import Auth from './Auth';

const Navigation = () => {
  return (
    <NavigationContainer>
      {auth.currentUser ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

export default memo(Navigation);
