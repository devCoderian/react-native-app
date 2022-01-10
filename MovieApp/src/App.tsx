import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';

import {UserContextProvider} from '~/Context/User';
const App = () => {
  return (
    <UserContextProvider>
        <StatusBar barStyle="light-content" /> 
        <Navigator />
    </UserContextProvider>
 
  );
};
//DOM 객체를 네이티브로 넘김
export default App