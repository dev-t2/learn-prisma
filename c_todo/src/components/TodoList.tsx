import React, { FC, memo, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native';

import { ITodo } from '../interfaces/todo';
import { Empty, Separator, TodoItem } from './items';

interface ITodoList {
  todos: ITodo[];
  onUpdate: (id: number) => () => void;
  onDelete: (id: number) => void;
}

const TodoList: FC<ITodoList> = ({ todos, onUpdate, onDelete }) => {
  const style = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  const keyExtractor = useCallback((item: ITodo) => item.id.toString(), []);

  const renderItem = useCallback<ListRenderItem<ITodo>>(
    ({ item }) => {
      return <TodoItem item={item} onUpdate={onUpdate} onDelete={onDelete} />;
    },
    [onUpdate, onDelete],
  );

  const ItemSeparatorComponent = useCallback(() => <Separator />, []);

  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      data={todos}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={<Empty />}
    />
  );
};

export default memo(TodoList);
