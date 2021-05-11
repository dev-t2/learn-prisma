import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ArrowComponent, ClassComponent } from './src/screens';

const App = () => (
  <SafeAreaView>
    <StatusBar style="auto" />

    <ClassComponent />
    <ArrowComponent />
  </SafeAreaView>
);

export default memo(App);
