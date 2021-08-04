import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />

      <Navigation />
    </>
  );
};

export default memo(App);
