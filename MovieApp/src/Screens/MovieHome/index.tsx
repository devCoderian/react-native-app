import React, {useContext, useLayoutEffect, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';

import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;
interface Props {
  navigation: NavigationProp;
}

const MovieHome = ({navigation}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);

  //useLayoutEffect는 화면이 표시되는 동시에 동기적으로 동작을 수행할 때 사용
  //useEffect처럼 컴포넌트가 화면에 표시된 이후, 호출되지만 useEffect와 다르게 컴포넌트가 화면에 완전히 표시되기 이전
  //동기적으로 실행된다.
  useLayoutEffect(() => {
      //헤더의 정보를 수정해야 할 경우 이처럼 동적으로 내비게이션의 option을 수정하고자 할 떄,
      //Props의 navigation의 setOptions를 활용
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            logout();
          }}>
          <Icon source={require('~/Assets/Images/ic_logout.png')} />
        </StyleButton>
      ),
    });
  }, []);

  //로그인 컴포넌트와 마찬가지로 splash 화면 hide
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <BigCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
            //상세페이지 이동 -> navigation.navigate()
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
};

export default MovieHome;
