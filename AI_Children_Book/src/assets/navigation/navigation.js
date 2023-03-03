import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../../screens/signup';
import { SignIn } from '../../screens/signin';
import { Home } from '../../screens/home';
import { TabNavigator } from './tab.navigation';
import { History } from '../../screens/history';
import { Purchase } from '../../screens/purchase';
import { Payment } from '../../screens/payment';
import { SplashScreen } from '../../screens/splashScreen';





export const Navigation = ()=>{

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='profil'>
                <Stack.Screen name='signup' component={SignUp}/>
                <Stack.Screen name='splashScreen' component={SplashScreen}/>
                <Stack.Screen name='signin' component={SignIn}/>
                <Stack.Screen name='home' component={Home}/>
                <Stack.Screen name='profil' component={TabNavigator}/>
                <Stack.Screen name='history' component={History}/>
                <Stack.Screen name='purchase' component={Purchase}/>
                <Stack.Screen name='payment' component={Payment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
