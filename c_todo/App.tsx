/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { AddTodo, Container, DateHead, TodoList } from './src/components';

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

const App = () => {
  const [todos] = useState<ITodo[]>([
    { id: 1, text: 'TypeScript', done: true },
    { id: 2, text: 'React Native', done: false },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.primaryVariant} />

          <DateHead />

          <TodoList todos={todos} />

          <AddTodo />
        </Container>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default memo(App);
