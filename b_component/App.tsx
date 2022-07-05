/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';

import { Greeting } from './src/components';

const App = () => {
  const name = 'TSX';

  return (
    <SafeAreaView>
      {/* Greeting Component */}
      <Greeting
        name={name} // Name Props
      />
    </SafeAreaView>
  );
};

export default memo(App);
