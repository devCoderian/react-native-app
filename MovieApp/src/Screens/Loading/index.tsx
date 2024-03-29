//ActiveityIndicator -> 리액트 네이티브에서 제공하는 화면 로딩중으로 표현하는 단순 컴포넌트
import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#E70915" size="large" />
    </Container>
  );
};

export default Loading;
