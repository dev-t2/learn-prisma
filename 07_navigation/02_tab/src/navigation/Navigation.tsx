import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import Stack from './Stack';
import Tab from './Tab';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        {/* <Stack /> */}
        <Tab />
      </NavigationContainer>
    </>
  );
};

export default memo(Navigation);
