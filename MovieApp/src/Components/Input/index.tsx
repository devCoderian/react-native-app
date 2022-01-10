import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #333333;
`;
const InputField = Styled.TextInput`
  flex: 1;
  color: #FFFFFF;
`;

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

//리액트 네이티브 TextInput 컴포넌트 구성에 필요한 데이터를 부모 컴포넌트로부터 Props를 통해 전달받는다.
//여기서 사용된 TextInput 컴포넌트의 Props 종류 
/*
selectionColor: 입력 필드에 내용을 복사하거나 붙여넣기 하기 위해 사용되는 selection의 색상을 결정한다.
secureTextEntry: 비밀번호같이 내용을 숨길지 여부
keyboardType: 키보드의 타입을 결정
autoCapitalize: 첫문자를 대문자로 자동으로 변경 여부
autoCorrext : 사용자의 입력 내용의 철자가 틀렸을 경우 자동으로 수정할지 여부
allowFontScaliing: 사용자의 단말기 설정을 통해 폰트 크기 적용 여부 체크
placeholderTextColr: placeHoloder 컬러
placeholder: 사용자의 입력 내용이 없을 때, 표시할 내용을 설정
clearButtonMode: 입력 내용이 있을때, 전체 삭제 버튼 표시 여부
onChangeText: 입력 창의 내용이 변경될 때, 호출되는 콜백 함수

*/
const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
