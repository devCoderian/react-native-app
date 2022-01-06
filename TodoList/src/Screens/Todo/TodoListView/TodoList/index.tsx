import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';
import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

//FlatList - 리액트 네이티브의 리스트 뷰 중 하나
const Container = Styled(FlatList)`
`;
interface Props {}

const TodoList = ({  }: Props) => {
  //Context인 TodoListContext를 useContext의 초기값으로 설정
  //TodoListContext 안에서 사용하고자 하는 todoList 변수와 removeTodoList 함수를 불러옴
  const { todoList, removeTodoList } = useContext<ITodoListContext>(
    TodoListContext
  );
  // FlatList는 아래와 같이 Props를 전달하여 사용 가능  
  return (
    <Container
      data={todoList}
      keyExtractor={(item, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({ item, index }) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && { flex: 1 }}
    />
  );
};
export default TodoList;
