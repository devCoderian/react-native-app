import React from 'react'
import Styled from 'styled-components/native';

import WeatherView from '~/Screens/WeatherView';
import { SearchContextProvider } from './Context/SerachContext';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;
`
interface Props {}

const App = ({}: Props) => {
    return (
        <SearchContextProvider>
            <Container>
                <WeatherView />
            </Container>
        </SearchContextProvider>
    )
}

export default App
