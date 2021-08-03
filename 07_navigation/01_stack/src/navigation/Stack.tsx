import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Chat, Home, List } from '../screen';

const StackNavigator = createStackNavigator();

const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="List" component={List} />
      <StackNavigator.Screen name="Chat" component={Chat} />
    </StackNavigator.Navigator>
  );
};

export default memo(Stack);
