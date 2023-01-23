import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Illustration from '../../assets/images/nothingFound.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';






export const NothingFoundIllustration = ()=>{

    const style=StyleSheet.create({
        container: {
            width: '90%',
            height: '60%',
            alignSelf: 'center',
            alignItems: 'center'
        },
        button: {
            width: '90%',
            height: 50,
            backgroundColor: '#009EFF',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15
        }
    })

    return(
        <View style={style.container}>
            <Illustration width={200} height={200}/>
            <Text style={{fontSize: 25, fontFamily: 'Roboto-Medium', color: 'black', marginVertical: 15}}>
                Nothing to display
            </Text>
            <Text style={{fontSize: 14, fontFamily: 'Roboto', color: 'black', textAlign: 'center'}}>
                try generating a new story or open a saved one
            </Text>

            <TouchableOpacity style={style.button}>
                <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium', color: 'white'}}>
                    Generate story
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export const ImageCover = ()=>{

    const style = StyleSheet.create({
        container: {
            width:  150,
            height: 200,
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            elevation: 10,
            shadowColor: '#009EFF',
            marginVertical: 10
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'stretch'
        }
    })


    return (
        <View style={style.container}>
            <Image style={style.image} source={require('../../assets/images/cover.jpg')}/>
        </View>
    )
}


export const StoryTitle = ()=>{
    const style = StyleSheet.create({
        title: {
            fontSize: 25,
            fontFamily: 'ACaslonPro-BoldItalic',
            color: 'black',
            marginVertical: 10
        }

    })


    return(
        <Text style={style.title}>
            this is the story title
        </Text>
    ) 
}


export const PageComponent = ()=>{

    const style = StyleSheet.create({
        container: {
            width:'100%',
            height: 450,
            flexDirection: 'row',
            justifyContent: 'center'
        },
        button: {
            width: '12%',
            height: '100%',
            backgroundColor: 'rgba(0,158,255,0)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        page: {
            width: '76%',
            height: '80%',
            paddingHorizontal: 2,
            paddingVertical: 2,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        content: {
            width: '100%',
            height: '100%',
            zIndex: 5,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center'
        }
    })

    return (
        <View style={style.container} >

            <WoodFrame />
            <View style={style.content}>
                <TouchableOpacity style={style.button}>
                    <MaterialIcons color={'#009EFF'} size={50} name="chevron-left"/>
                </TouchableOpacity>

                <View style={style.page}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center', lineHeight: 30, fontFamily: 'Solitreo-Regular'}}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                    </Text>
                </View>

                <TouchableOpacity style={style.button}>
                    <MaterialIcons color={'#009EFF'} size={50} name="chevron-right"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export const WoodFrame = ()=>{
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 1
        }
    })

    return( 
        <View style={style.container}>
            <Image style={{width: '100%', height: '100%'}} source={require('../../assets/images/woordFrame.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100}} source={require('../../assets/images/elephant.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100, right: 10}} source={require('../../assets/images/cat.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100, right: 10, bottom: 20}} source={require('../../assets/images/girrafeHeart.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 110, left: 10, bottom: 15}} source={require('../../assets/images/girrafe.png')}/>
        </View>
    )

}




