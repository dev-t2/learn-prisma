import React, { FC, memo, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native';

import { ITodo } from '../../App';
import { Empty, TodoItem } from './items';

interface ITodoList {
  todos: ITodo[];
}

const TodoList: FC<ITodoList> = ({ todos }) => {
  const style = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(() => ({ flex: 1 }), []);

  const keyExtractor = useCallback((item: ITodo) => item.id.toString(), []);

  const renderItem = useCallback<ListRenderItem<ITodo>>(({ item }) => {
    return <TodoItem item={item} />;
  }, []);

  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      data={todos}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<Empty />}
    />
  );
};

export default memo(TodoList);
