import React, { createContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'; 
//버전 확인

const defaultContext: IUserContext= {
    isLoading: false, //데이터를 불러왔는지 여부
    userInfo: undefined, //사용자 정보를 담을 userInfo
    login: (email: string, password: string) => {}, //로그인, 로그아웃 함수
    getUserInfo: () => {}, //사용자 정보를 습득하기 위한 함수
    logout: () => {}
}


const UserContext = createContext(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {

    const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //로그인 시 토큰을 받았다고 가정 -> 그 키를 저장할 AsyncStorage 사용
    const login = (email: string, password: string): void => {
        AsyncStorage.setItem('token', 'save ypur token').then(() => {
            setUserInfo({
                name: 'dev-yakuza',
                email: 'fev.yakuza@gmail.com'
            });
            setIsLoading(true);
        })   
    };

    const getUserInfo = (): void => {
        AsyncStorage.getItem('token')
        .then(value => {
            if(value){
                setUserInfo({
                    name:'dev-yakuza',
                    email: 'dev.yakuza@gmail.com'
                });
            }
            setIsLoading(true);
        })
        .catch(()=> {
            setUserInfo(undefined);
            setIsLoading(true);
        });
    };

    const logout = (): void => {
        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    };

    //로그인 여부를 체크하는 함수 
    //실제 토큰 키의 체크는 진행 X, 토큰 키가 있다면 로그인한 상태라고 가정
    useEffect(()=> {
        getUserInfo();
    },[]);

    return(
        <UserContext.Provider
            value = {{
                isLoading,
                userInfo,
                login,
                getUserInfo,
                logout
            }}>
                {children}
        </UserContext.Provider>
    )

    return (
        <div>
            
        </div>
    )
}

export { UserContextProvider, UserContext }
