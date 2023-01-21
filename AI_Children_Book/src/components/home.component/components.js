import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";



export const ImageView = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '78%',
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
            backgroundColor: 'rgba(0,158,255, 0.3)' 
        },
        imageCont: {
            maxWidth: 300,
            height: 200,
            position: 'absolute',
            bottom: -30,
            alignSelf: 'center'
        },
        titleCont: {
            width: '90%',
            height: 150,
            position: 'absolute',
            zIndex: 5,
            backgroundColor: 'rgba(255,255,255,0.3)',
            alignSelf: 'center',
            top: 180,
            borderRadius: 15
        }
    })

    return (
        <View style={style.container} >
            <Image style={{width: 80, height: 70, position: 'absolute', top: 50, left: 60}} source={require('../../assets/images/book.png')} />
            <Image style={{width: 70, height: 70, position: 'absolute', top: 120, right: 60}} source={require('../../assets/images/book1.png')} />
            <Image style={{width: 70, height: 70, position: 'absolute', top: 320, right: 250}} source={require('../../assets/images/book2.png')} />
            <Image style={style.imageCont}  source={require('../../assets/images/illustration.jpg')}/>

            <View style={style.titleCont}>
                <Text style={{fontSize: 35, fontFamily: 'Roboto-Bold', textAlign: 'center', color: 'rgba(0,158,255, 0.8)'}}>
                    Welcome to
                </Text>
                <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold', textAlign: 'center', color: 'rgba(0,158,255, 0.6)' }}>
                    AI Childrens Book
                </Text>
                <Text style={{fontSize: 15, fontFamily: 'Roboto-Regular', color: 'rgba(0,0,0, 0.4)', textAlign: 'center', marginTop: 10 }}>
                    AI Childrens Book is the first mobile application that use chatgpt to generate stories  
                </Text>
            </View>
        </View>

    )
}