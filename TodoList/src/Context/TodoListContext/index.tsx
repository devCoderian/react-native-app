import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

//CreateContext 함수에 초기 값을 할당하여 Context를 생성할 수 있다. 
//Context 데이터 타입 지정
const TodoListContext = createContext<ITodoListContext>({
    todoList: [],//할 일 리스트
    addTodoList: (todo: string): void => {}, //데이터 추가
    removeTodoList: (index: number) : void => {}, //데이터 삭제
});

// Context의 프로바이더 컴포넌트로서, 공통 부모 컴포넌트의 부모 컴포넌트가 될 예정이다.
// 따라서 자식 컴포넌트를 children 매개 변수를 통해 전달 받는다.
// 전달받은 자식 컴포넌트(공통 부모 컴포넌트)는 createContext로 생성한 Context 프로바이더인
// TodoListContext.Provider의 하위에 위치

const TodoListContextProvider = ({children}:Props) => {
    const [todoList, setTodoList] = useState<Array<string>>([]);
    // 할 일 추가 함수
    const addTodoList = (todo: string): void => {
        const list = [...todoList, todo];
        setTodoList(list);
        //물리적 저장(windows.localStorage라 생각하면 편하다.)
        AsyncStorage.setItem('todoList', JSON.stringify(list));
        // 키값은 모두 문자열이어야 하기 때문에 
        // 문자열 배열인 데이터를 JSON.stringfy로 변환
    };

    //할 일 제거 함수
    const removeTodoList = ( index : number ): void => {
        let list= [...todoList];
        list.splice(index, 1); //원본배열 수정
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    }

    //AsyncStorage 에 저장된 데이터를 불러와, Context의 값을 초기화하기 위한 함수
    const initData = async() => {
        try {
            const list = await AsyncStorage.getItem('todoList');
            if(list !== null){
                setTodoList(JSON.parse(list));
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        initData();
    },[]);

    return (
        <TodoListContext.Provider
        value = {{
            todoList,
            addTodoList,
            removeTodoList
        }}>
        {children}
        </TodoListContext.Provider>
    )
}

export { TodoListContext, TodoListContextProvider};