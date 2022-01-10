
//Login 네비게이션을 활용하여 화면 이동을 구현하기 위해서는 navigator 라는 Props를 활용해야 한다.
//Navigator는 특정 화면으로 이동하거나 , 이전 화면으로 돌아가기 위해 navigator.navigate()와 navigator.goBack()등을 제공한다.
//이 navigator의 Prop을 활용하기 위해서 타입 정의가 필요

//splash 화면을 닫기 위해, useEffect를 사용하여, 컴포넌트가 화면에 표시된 후, hide 함수 호출

//Linking 컴포넌트의 openURL에 브라우저로 열고자하는 URL을 설정하여 호출하면 해당 URL을 브라우저에 표시
import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import {Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input style={{marginBottom: 16}} placeholder="이메일" />
        <Input
          style={{marginBottom: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Button
          style={{marginBottom: 24}}
          label="로그인"
          onPress={() => {
            login('dev.yakuza@gmail.com', 'password');
          }}
        />
        <PasswordReset
          onPress={() => {
            Linking.openURL('https://dev-yakuza.github.io/ko/');
          }}>
          비밀번호 재설정
        </PasswordReset>
      </FormContainer>
    </Container>
  );
};

export default Login;
