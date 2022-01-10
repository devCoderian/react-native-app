/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '~/App';
import {name as appName} from './app.json';


//react-native-cli는 네이티브 모듈에서 동작하는 js 엔진이 가상 DOM 객체를 넘겨주는 App의 존재를 알 수 있도록
//index.js를 만든다

AppRegistry.registerComponent(appName, () => App);
