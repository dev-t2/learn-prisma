import React, { memo } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Person } from './src/screens';
import * as D from './src/data';

const people = D.makeArray(100).map(D.createRandomPerson);

const App = () => {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default memo(App);
