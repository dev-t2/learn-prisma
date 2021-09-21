import React, { memo, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../firebase';
import Main from './Main';
import Auth from './Auth';

const Navigation = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsSignIn(!!user);
    });
  }, []);

  return (
    <NavigationContainer>{isSignIn ? <Main /> : <Auth />}</NavigationContainer>
  );
};

export default memo(Navigation);
