import React from 'react'
import Styled from 'styled-components/native';

interface Props {
    label: string;
    style?: Object;
    onPress: () => void;
}

const StyledButton = Styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: #333333;
`
const Label = Styled.Text`
    color: #FFF;
`

const Button = ({label, style, onPress}: Props) => {
    return (
        <StyledButton style = {style} onPress = {onPress}>
            <Label>{label}</Label>
        </StyledButton>
    )
}

export default Button
