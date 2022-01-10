type LoginNaviParamList = {
    Login: undefined;
}

//MovieNAvigator => MovieHome 화면과 Detaol 화면을 가지고 있고
//Detail 화면은 Number 타입의 id를 파라미터로 받을 수 있도록 선언
type MovieNaviParamList = {
    MovieHome: undefined;
    MovieDetail: {id:Number}
}