import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialIcons';
import { StoryGenerator } from '../../screens/generateStory';

const Tab = createBottomTabNavigator();


export const TabNavigator = ()=>{

    return (
        <Tab.Navigator screenOptions={(route)=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
    
                if(route.name == 'story'){
                    iconName: focused
                    ? 'account-circle'
                    : 'account-circle-outlined'
                } else if(route.name == 'book'){
                    iconName: focused
                    ? 'library-books'
                    : 'library-books-outlined'
                }else if(route.name == 'settings'){
                    iconName: focused
                    ? 'settings'
                    : 'settings-outlined'
                }
    
                return <Material name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'rgba(0,158,255, 1)',
            tabBarInactiveTintColor: 'black',
            headerShown: false
        })}>
            <Tab.Screen name='story' component={StoryGenerator}/>
        </Tab.Navigator>
    )

}
