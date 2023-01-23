import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { HistoryStories } from "../components/history.component/components";




export const History = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        tabBar: {
            width: '100%',
            height: 60,
            backgroundColor: '#009EFF',
            justifyContent: 'center'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,0.8)',
            marginHorizontal: 15,
            marginVertical: 15
        },
    })


    return (
        <View style={style.container}>
            <View style={style.tabBar}>
                <TouchableOpacity>
                    <MaterialIcons  name="chevron-left" color={'white'} size={55}/>
                </TouchableOpacity>
            </View>

            <Text style={style.title}>
                History
            </Text>

            <HistoryStories />
        </View>

    )
}