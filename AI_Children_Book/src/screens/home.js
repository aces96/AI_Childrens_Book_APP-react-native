import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ImageView } from "../components/home.component/components";
import { useNavigation } from "@react-navigation/native";



export const Home = ()=>{

    const navigation = useNavigation()

    const style = StyleSheet.create({
        container : {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        },
        button: {
            width: '90%',
            height: 60,
            borderRadius: 15,
            backgroundColor: '#009EFF',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: "center",
            position: 'absolute',
            bottom: 70
        }
    })

    return (
        <View style={style.container}>
            <ImageView />
            <TouchableOpacity onPress={()=>navigation.navigate('profil')}  style={style.button}>
                <Text style={{fontSize: 20, fontFamily: 'Roboto', color: 'white'}}>Get started</Text>
            </TouchableOpacity>
        </View>
    )
}