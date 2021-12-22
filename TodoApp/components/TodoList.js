import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styled from 'styled-components/native';

const TodoList = ({todos}) => {
  return (
    <List
      data={todos}
      renderItem={({item}) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const List = styled.FlatList`
  flex: 1;
`;

export default TodoList;
