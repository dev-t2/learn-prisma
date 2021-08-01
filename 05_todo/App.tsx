import React, { memo, useCallback, useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { theme } from './src/emotion/theme';
import { Input, Title, Todo, Todos } from './src/components';

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.background,
  paddingTop: Constants.statusBarHeight,
}));

const sampleTodos = [
  { id: 1, text: 'TypeScript', isCompleted: true },
  { id: 2, text: 'React', isCompleted: true },
  { id: 3, text: 'React Native', isCompleted: false },
  { id: 4, text: 'Expo', isCompleted: false },
];

const App = () => {
  const [todos, setTodos] = useState(sampleTodos);
  const [text, setText] = useState('');

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (text.length > 0) {
      const id = Date.now();
      const todo = { id, text, isCompleted: false };

      setTodos(todos => [...todos, todo]);
      setText('');
    }
  }, [text]);

  const onCheck = useCallback(
    (id: number) => () => {
      setTodos(todos => {
        return todos.map(todo => {
          return todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        });
      });
    },
    []
  );

  const onDelete = useCallback(
    (id: number) => () => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    []
  );

  return (
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
              onDelete={onDelete}
            />
          ))}
        </Todos>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
