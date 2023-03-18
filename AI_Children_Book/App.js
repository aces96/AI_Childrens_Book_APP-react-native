
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Navigation } from './src/assets/navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './src/assets/redux/store';




function App(){
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store={store}>
        <SafeAreaView  style={{flex: 1}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'transparent'}
          />
          <Navigation/>

        </SafeAreaView>
    </Provider>
  );
}



export default App;
