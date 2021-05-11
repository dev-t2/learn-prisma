import React, { FC, memo } from 'react';
import { Text } from 'react-native';

import * as D from '../data';

export type PersonProps = {
  person: D.IPerson;
};

const Person: FC<PersonProps> = ({ person }) => (
  <Text>{JSON.stringify(person, null, 2)}</Text>
);

export default memo(Person);
