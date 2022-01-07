import React from 'react'
import { TextInput } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1
`


const  App = () => {
    return (
        <Container>
                <TextInput>안녕 </TextInput>            
        </Container>
    )
}



export default  App
