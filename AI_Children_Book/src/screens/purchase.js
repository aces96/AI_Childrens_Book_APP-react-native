import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BasicPack, PremiumPack, UltimatePack } from "../components/purchase.component/component";
import { useNavigation } from "@react-navigation/native";



export const Purchase = ()=>{

    const navigation = useNavigation()
    
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
        packContainer: {
            flex: 1,
            backgroundColor: 'white'
        },
        button : {
            width: '90%',
            height: 60,
            backgroundColor: '#009EFF',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 15,
            
        }
    })


    return (
        <View style={style.container}>
            <View style={style.tabBar}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons  name="chevron-left" color={'white'} size={55}/>
                </TouchableOpacity>
            </View>

            <Text style={style.title}>
                Purchase
            </Text>

            <ScrollView style={style.packContainer}>
                <BasicPack />
                <PremiumPack />
                <UltimatePack />

                <TouchableOpacity onPress={()=>navigation.navigate('payment')} style={style.button}>
                    <Text style={{fontSize: 15, color: 'white'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}