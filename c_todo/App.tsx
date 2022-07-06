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
import { StatusBar } from 'react-native';
import { Edge, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { DateHead } from './src/components';

const App = () => {
  const edges = useMemo<Edge[]>(() => ['bottom'], []);

  const today = useMemo(() => new Date(), []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={edges}>
        <StatusBar barStyle="light-content" backgroundColor="#002f6c" />

        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default memo(App);
