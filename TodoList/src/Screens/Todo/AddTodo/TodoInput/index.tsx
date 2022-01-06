import React from 'react';
import { Platform } from 'react-native';
import Styled from 'styled-components/native';

// 화면을 어둡게 처리할 Background 컴포넌트
// 할 일 텍스트를 입력받을 TextInput
import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.KeyboardAvoidingView`
    position: absolute;
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    justify-content: flex-end;
`
interface Props {
    hideTodoInput: () => void;
}

//hideTodoInput
//화면에 표시된 TodoInput 컴포넌트를 숨기기 위해
//부모 컴포넌트인 AddTodo컴포넌트로부터 hideTodoInput함수를 Props를 통해 전달받음


//KeyboardAvoidingView는 키보드가 활성화되면서 입력창을 가리는 문제를 해결하기 위한 컴포넌트로써
//이곳에서는 IOS만 padding 옵션을 주었다.

//IOS와 안드로이드를 구별하기 위해 리액트 네이티브 자체에서 Platform 모듈 제공

const TodoInput = ({hideTodoInput}: Props) => {
    return (
        <Container behavior={Platform.OS === 'ios'? 'padding': undefined}>
            <Background onPress = {hideTodoInput} />
            <TextInput hideTodoInput = {hideTodoInput} />
        </Container> 
    )
}

export default TodoInput