import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Chat, Home, List } from '../screen';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Chat: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="List" component={List} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
};

export default memo(Stack);
