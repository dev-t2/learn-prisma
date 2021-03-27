import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './src/navigations/Tab';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default memo(App);
