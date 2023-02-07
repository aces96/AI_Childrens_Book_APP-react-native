
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
import { StripeProvider } from '@stripe/stripe-react-native';
import {STRIPE_KEY} from "@env"
import { Provider } from 'react-redux'
import { store } from './src/assets/redux/store';




function App(){
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store={store}>
      <StripeProvider  publishableKey={STRIPE_KEY}>
        <SafeAreaView  style={{flex: 1}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'transparent'}
          />
          <Navigation/>

        </SafeAreaView>
      </StripeProvider>
    </Provider>
  );
}



export default App;
