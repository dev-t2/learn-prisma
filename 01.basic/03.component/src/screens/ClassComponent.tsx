import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import * as D from '../data';

const person = D.createRandomPerson();

export default class ClassComponent extends PureComponent {
  render() {
    return <Text>{JSON.stringify(person, null, 2)}</Text>;
  }
}
