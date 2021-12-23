import React from 'react';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle}) => {
  return (
    <List
      ItemSeparatorComponent={() => <Separator />}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const List = styled.FlatList`
  flex: 1;
`;

const Separator = styled.View`
  background-color: #e0e0e0;
  height: 1px;
`;

export default TodoList;
