import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';
import TodoListView from './TodoListView';
import AddTodo from './AddTodo';


const Container = Styled.View`
  flex: 1;
`;
interface Props {}

const Todo = ({  }: Props) => {
  return (
    <Container>
      <TodoListView />
      <AddTodo />
    </Container>
  );
};
export default Todo;
