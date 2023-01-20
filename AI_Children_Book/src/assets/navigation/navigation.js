import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../../screens/signup';
import { SignIn } from '../../screens/signin';





export const Navigation = ()=>{

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='signin'>
                <Stack.Screen name='signup' component={SignUp}/>
                <Stack.Screen name='signin' component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
