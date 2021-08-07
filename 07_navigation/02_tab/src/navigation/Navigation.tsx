import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './Stack';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
};

export default memo(Navigation);
