import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen';
import Styled from 'styled-components/native';
import TodoList from './TodoList';


const Container = Styled.SafeAreaView`
    flex:1;
`

interface Props {}

const TodoListView = ({}:Props) => {
    return (
        <>
        <Container>
            <Header />
            <TodoList />
        </Container>
        </>
    )
}

export default TodoListView
