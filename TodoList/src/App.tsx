import React, {Component, Fragment} from 'react'
import { TodoListContextProvider } from '~/Context/TodoListContext';
import Styled from 'styled-components/native';
import TodoList from './Screens/Todo';
import Todo from './Screens/Todo';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;
`
const App = () => {

    return (
        <TodoListContextProvider>
            <Container>
                <Todo />
            </Container>
        </TodoListContextProvider>
    )
}

export default App
