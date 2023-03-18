import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




export const BasicPack = (props)=>{

    const style=StyleSheet.create({
        container: {
            width: "80%",
            backgroundColor: '',
            borderWidth: 1,
            borderColor: '#009EFF',
            borderRadius: 15,
            alignSelf: 'center',
            marginVertical: 10,
            elevation: 5,
            backgroundColor: 'white'
        },
        packTitleCont: {
            width: '95%',
            height: 90,
            alignSelf: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#009EFF'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        },
        price: {
            fontSize: 35,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        },
        details: {
            width: '100%',
            alignSelf: 'center'
        },
    })

    const data = {
        price: "10$",
    }


    return (
        <TouchableOpacity onPress={()=>props.handleClick(data)} style={style.container}>
            <View style={style.packTitleCont}>
                <Text style={style.title}>
                    Basic 
                </Text>
                <Text style={style.price}>
                    10$ 
                </Text>
            </View>
            <View style={style.details}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max stories: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        Chatgpt tokens: 0.5
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        chatgpt max words: 375
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max story pages: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        number of themes: 20
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max character: 3
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const PremiumPack = (props)=>{

    const style=StyleSheet.create({
        container: {
            flex: 1,
            width: "80%",
            backgroundColor: '#009EFF',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            alignSelf: 'center',
            marginVertical: 10
        },
        packTitleCont: {
            width: '95%',
            height: 90,
            alignSelf: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'white'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: 'white'
        },
        price: {
            fontSize: 35,
            fontFamily: 'Roboto-Medium',
            color: 'white'
        },
        details: {
            width: '100%',
            alignSelf: 'center'
        },
    })


    return (
        <TouchableOpacity onPress={()=>props.handleClick()} style={style.container}>
            <View style={style.packTitleCont}>
                <Text style={style.title}>
                    Premium 
                </Text>
                <Text style={style.price}>
                    50$ 
                </Text>
            </View>
            <View style={style.details}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        max stories: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        Chatgpt tokens: 0.5
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        chatgpt max words: 375
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        max story pages: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        number of themes: 20
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'white'} size={25}/>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        max character: 3
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const UltimatePack = ()=>{

    const style=StyleSheet.create({
        container: {
            flex: 1,
            width: "80%",
            backgroundColor: '',
            borderWidth: 1,
            borderColor: '#009EFF',
            borderRadius: 15,
            alignSelf: 'center',
            marginVertical: 10
        },
        packTitleCont: {
            width: '95%',
            height: 90,
            alignSelf: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#009EFF'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        },
        price: {
            fontSize: 35,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        },
        details: {
            width: '100%',
            alignSelf: 'center'
        },
    })


    return (
        <TouchableOpacity style={style.container}>
            <View style={style.packTitleCont}>
                <Text style={style.title}>
                    Ultimate 
                </Text>
                <Text style={style.price}>
                    100$ 
                </Text>
            </View>
            <View style={style.details}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max stories: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        Chatgpt tokens: 0.5
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        chatgpt max words: 375
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max story pages: 10
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        number of themes: 20
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 10}}>
                    <MaterialIcons name="done" color={'#009EFF'} size={25}/>
                    <Text style={{fontSize: 17, color: 'black'}}>
                        max character: 3
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}