import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ArrowComponent, ClassComponent, Person } from './src/screens';
import * as D from './src/data';

const person = D.createRandomPerson();

const App = () => (
  <SafeAreaView>
    <StatusBar style="auto" />

    <ClassComponent />
    <ArrowComponent />
    <Person person={person} />
  </SafeAreaView>
);

export default memo(App);
