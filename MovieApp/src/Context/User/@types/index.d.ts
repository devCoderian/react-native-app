interface IUserInfo{
    name: string;
    email: string;
}

interface IUserContext{
    isLoading: boolean; //useContext 데이터 불러왔는 지 확인 여부
    userInfo: IUserInfo | undefined; //사용자 정보
    login: (email: string, password: string) => void;
    getUserInfo: () => void; //사용자 정보를 가지고 올 수 있다.
    logout: () => void;
}
