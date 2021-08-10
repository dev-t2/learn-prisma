import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './Auth';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default memo(Navigation);
