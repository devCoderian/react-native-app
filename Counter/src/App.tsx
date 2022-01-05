import React, {Fragment} from 'react';
import Styled from 'styled-components/native';
import { Counter } from './Screen/Counter';

const Container = Styled.View`
    flex:1;
    background-color: #EEE;
`

const App = () => {
  return (
    <>
        <Container>
            <Counter title = "Counter App 확인해보기" initValue = {5} />
        </Container>
    </>
  );
};

export default App;
