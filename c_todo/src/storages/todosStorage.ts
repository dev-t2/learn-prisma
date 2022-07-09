import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITodo } from '../interfaces/todo';

const key = 'todos';

export const getTodosStorage = async () => {
  const result = await AsyncStorage.getItem(key);
  const todos: ITodo[] = result ? JSON.parse(result) : [];

  return todos;
};

export const setTodosStorage = async (todos: ITodo[]) => {
  await AsyncStorage.setItem(key, JSON.stringify(todos));
};
