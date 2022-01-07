import React, {useContext, useEffect, useState} from 'react';
import { FlatList, Alert, Text } from 'react-native';
//Geolocation 필요
import Geolocation from 'react-native-geolocation-service';
import Styled from 'styled-components/native';
import SearchInput from '~/Components/SearchInput';
import { SearchContext } from '~/Context/SerachContext';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #EEE;
`

const WeatherContainer = Styled(FlatList)``; //당겨서 갱신 기능
const LoadingView = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`
const LoadingLabel = Styled.Text`
    font-size: 16px;
`
const WeatherItemContainer = Styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`
const Weather = Styled.Text`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
`
const Temperature = Styled.Text`
    font-size: 16px;
`

interface Props{}

const API_KEY= 'e3dbc17b3e94e4736c1871cf3a520e7e';

//사용할 정보를 ts로 사용하여 정의
interface IWeather {
    temperature? : number;
    weather?: string;
    isLoading: boolean;
}

const WeatherView = ({}: Props) => {
    const { text, searchText } = useContext<ISearchList>(SearchContext);
    //타입을 컴포넌트에서 갱신할 수 있는 데이터인 useState로 생성
    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        temperature: undefined,
        weather: undefined,
        isLoading: false
    });

    useEffect(() => {
        getCurrentWeather();
    }, [text])
    //위치의 날씨 정보를 가져오기 위한 getCurrentWeather 함수 정의
    const getCurrentWeather = () => {
        setWeatherInfo({
            isLoading: false, 
        });
        fetch(
            // `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`,
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`,
        ).then((response) => response.json())
        .then((json) => { //정상 처리
                setWeatherInfo({
                    temperature: json.main.temp,
                    weather: json.weather[0].main,
                    isLoading: true,
                });
        }).catch(error => { //에러 처리
            setWeatherInfo({
                isLoading: true,
            });
            showError('날씨 정보를 가져오는데 실패했습니다.')
            });
        };
        //위치 정보 습득 실패 시 실패 메세지 화면 표기
        const showError = (message: string): void => {
            setTimeout(() => { //setTimeout 사용 이유 -> Alert.alert에 의해 화면 갱신 X ->
                // 갱신 후 비동기 처리 필요
                Alert.alert(message); 
            }, 500); 
        }; 

        
        let data =[];
        const {isLoading, weather, temperature} = weatherInfo;
        if(weather && temperature){
            data.push(weatherInfo);
        }
        const [showInput, setShowInput] = useState(false)
        return(
            <Container>
                <SearchInput hideTodoInput={()=> setShowInput(false)} />
                <WeatherContainer
                    onRefresh = {() => getCurrentWeather()} //당겨서 갱신할 때
                    refreshing = {!isLoading} //갱신중인지 아닌지 확인하기 위해
                    //Boolean 값을 설정하면 당겨서 갱신하기 기능이 사용가능하다.
                    data = {data}
                    keyExtractor={(item, index)  => {
                        return `Weather-${index}`
                    }}
                    ListEmptyComponent={
                        <LoadingView>
                            <Loading size = "large" color = "#1976D2" />
                            <LoadingLabel>Loading...</LoadingLabel>
                        </LoadingView>
                    }
                    renderItem={({item, index}) => (
                        <WeatherItemContainer>
                            <Weather>{(item as IWeather).weather}</Weather>
                            <Temperature>({(item as IWeather).temperature}C)</Temperature>
                        </WeatherItemContainer>
                    )}
                    contentContainerStyle = {{ flex: 1}}
                    />
            </Container>
        )

    }


export default WeatherView;


 //현재 위치 위도와 경도 가져오기
 /*Geolocation.getCurrentPosition(
    (position) => {
        const {latitude, longitude} = position.coords;
        //가져온 위치 정보를 사용하여 OpenWeather API를 Fetch API를 사용하여 호출
        // fetch (
        //     // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API%20key}
        //     `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        //     )
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        ).then((response) => response.json())
        .then((json) => { //정상 처리
                setWeatherInfo({
                    temperature: json.main.temp,
                    weather: json.weather[0].main,
                    isLoading: true,
                });
        }).catch(error => { //에러 처리
            setWeatherInfo({
                isLoading: true,
            });
                // console.log(error);
                // showError(error);
            showError('날씨 정보를 가져오는데 실패했습니다.')
            })
        },
        (error) => { ///위치 정보 습득 실패 시
            setWeatherInfo({
                isLoading: true,
            });
            showError('위치정보를 가져오는데 실패했다.');
        }
    );
};
*/