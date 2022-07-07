import React, { FC, memo, useMemo } from 'react';
import { FlatList, StyleProp, Text, View, ViewStyle } from 'react-native';

import { ITodo } from '../../App';
import { Empty } from './items';

interface ITodoList {
  todos: ITodo[];
}

const TodoList: FC<ITodoList> = ({ todos }) => {
  const style = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
      ListEmptyComponent={<Empty />}
    />
  );
};

export default memo(TodoList);
