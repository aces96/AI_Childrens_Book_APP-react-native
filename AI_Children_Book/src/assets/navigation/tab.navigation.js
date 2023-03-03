import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StoryGenerator } from '../../screens/generateStory';
import { Book } from '../../screens/book';
import { Settings } from '../../screens/settings';

const Tab = createBottomTabNavigator();


export const TabNavigator = ()=>{

    return (
        <Tab.Navigator initialRouteName='story' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'rgba(0,158,255, 1)',
            tabBarInactiveTintColor: 'rgba(0,0,0,0.7)',
        }} >
            <Tab.Screen options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialIcons  name='add-circle' size={size} color={color}/>
                )
            }} name='story' component={StoryGenerator}/>

            <Tab.Screen options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialIcons  name='auto-stories' size={size} color={color}/>
                )
            }} name='book' component={Book}/>

            <Tab.Screen options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialIcons  name='settings' size={size} color={color}/>
                )
            }} name='settings' component={Settings}/>
        </Tab.Navigator>
    )

}
