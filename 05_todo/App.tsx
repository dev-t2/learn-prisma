import React, { memo, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { cacheFonts, cacheImages } from './src/lib/cache';
import { checkIcon, deleteIcon, editIcon, uncheckIcon } from './src/icons';
import { theme } from './src/emotion/theme';
import { Input, Title, Todo, Todos } from './src/components';

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.background,
  paddingTop: Constants.statusBarHeight,
}));

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const setStore = useCallback(async (todos: Todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));

      setTodos(todos);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getStore = useCallback(async () => {
    const todos = JSON.parse((await AsyncStorage.getItem('todos')) || '[]');

    if (todos.length > 0) {
      setTodos(todos);
    } else {
      const id = Date.now();
      const todo = { id, text: 'Create a new to do!! 🚀', isCompleted: false };

      setStore([todo]);
    }
  }, [setStore]);

  const startAsync = useCallback(async () => {
    const images = cacheImages([checkIcon, deleteIcon, editIcon, uncheckIcon]);
    const fonts = cacheFonts([]);

    await Promise.all([...images, ...fonts]);

    getStore();
  }, [getStore]);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const onError = useCallback((error: Error) => {
    console.error(error);
  }, []);

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (text.length > 0) {
      const id = Date.now();
      const todo = { id, text, isCompleted: false };

      setStore([...todos, todo]);
      setText('');
    }
  }, [text, setStore, todos]);

  const onCheck = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.map(todo => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  const onEdit = useCallback(
    (id: number, text: string) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === id ? { ...todo, text } : todo;
      });

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  const onDelete = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.filter(todo => todo.id !== id);

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <Title>TODO</Title>

        <Input
          value={text}
          placeholder="Please enter what to do..."
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />

        <Todos>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </Todos>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading startAsync={startAsync} onFinish={onFinish} onError={onError} />
  );
};

export default memo(App);
