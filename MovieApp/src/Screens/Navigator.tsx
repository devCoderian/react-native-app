import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext }from 'react'
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';
import Loading from '~/Screens/Loading';

//Stack Navi를 사용하기 위해 createStackNavi를 사용해야 한다.
//영화 리스트 화면 위에 상세 페이지 화면을 쌓아서 표시한다.

const Stack = createStackNavigator();
import UserContext from '~/Context/User'

const LoginNavigator = () => {
    return (
         <Stack.Navigator>
             <Stack.Screen
             name = "Login"
             component={Login}
             options={{
                 title: 'MOVIEAPP',
                 headerTransparent: true,
                 headerTintColor:'#E70915',
                 headerTitleStyle: {
                     fontWeight: 'bold'
                 }
             }}
             />
         </Stack.Navigator>
    )
}


const MovieNavigator = () => {
    return (
         <Stack.Navigator>
             <Stack.Screen
             name = "MovieHome"
             component={MovieHome}
             options={{
                 title: 'MOVIEAPP',
                 headerTransparent: true,
                 headerTintColor:'#E70915',
                 headerStyle: {
                    backgroundColor: '#141414',
                    borderBottomWidth: 0
                 },
                 headerTitleStyle: {
                     fontWeight: 'bold'
                 },
             }}
             />
             <Stack.Screen
             name='MovieDetail'
            component={MovieDetail}
            options={{
                title: 'MOVIEAPP',
                headerStyle:{
                    backgroundColor: '#141414',
                    borderBottomWidth: 0
                },
                headerTitleStyle:{
                    fontWeight: 'bold'
                },
                headerBackTitleVisible: false
            }}
            />
         </Stack.Navigator>
    );
};

export default () => {
    //const isLoading = false;
    //const userInfo = false;

    const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

    console.log(isLoading);
    console.log(userInfo); 

    if(isLoading == false){
        return <Loading />;
    }
    return (
        //Navigator 사용을 위해서 최상위는 NavigationContainer로 감싸야 한다.
        <NavigationContainer>
            {userInfo ? <MovieNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}

