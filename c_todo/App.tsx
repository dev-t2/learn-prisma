/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';

import { ITodo } from './src/interfaces/todo';
import { getTodosStorage, setTodosStorage } from './src/storages/todosStorage';
import theme from './src/theme';
import { AddTodo, Container, DateHead, TodoList } from './src/components';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const savedTodos = await getTodosStorage();

        setTodos(savedTodos);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await setTodosStorage(todos);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [todos]);

  const onUpdate = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.map(todo => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });

      setTodos(updatedTodos);
    },
    [todos],
  );

  const onDelete = useCallback(
    (id: number) => {
      const filteredTodos = todos.filter(todo => todo.id !== id);

      setTodos(filteredTodos);
    },
    [todos],
  );

  const onInsert = useCallback(
    (text: string) => {
      const ids = todos.map(todo => todo.id);
      const id = todos.length > 0 ? Math.max(...ids) + 1 : 1;
      const todo: ITodo = { id, text, done: false };

      setTodos([...todos, todo]);
    },
    [todos],
  );

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.primaryVariant} />

          <DateHead />

          <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />

          <AddTodo onInsert={onInsert} />
        </Container>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default memo(App);
