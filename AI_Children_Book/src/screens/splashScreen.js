import React, {useEffect} from "react";
import Video from 'react-native-video';
import { View, StyleSheet, Dimensions } from "react-native";
import { getData } from "../assets/storage/storage";
import { useNavigation } from "@react-navigation/native";



export const SplashScreen = ()=>{

    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('home')
        }, 3000)
    }, [])



    return (
        <View style={{width:'100%', height: Dimensions.get('window').height}} >
            <Video source={require('../assets/video.mp4')}   
                ref={(ref) => {
                    this.player = ref
                }}     
                
                resizeMode={'cover'}
                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} />
        </View>
    )
}