/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useMemo } from 'react';
import { SafeAreaView } from 'react-native';

import { DateHead } from './src/components';

const App = () => {
  const today = useMemo(() => new Date(), []);

  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
};

export default memo(App);
