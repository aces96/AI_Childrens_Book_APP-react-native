import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";




export const SettingsHistoryButton = ()=>{

    const navigation = useNavigation()

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('history')} style={style.button}>
            <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="history" color={'rgba(0,0,0,0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            History
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(0,0,0,0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}

export const SettingsSavedButton = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="stars" color={'rgba(0,0,0,0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            Saved
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(0,0,0,0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}


export const SettingsOptionsButton = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="list" color={'rgba(0,0,0,0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            Options
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(0,0,0,0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}


export const SettingsFeedbackButton = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="chat" color={'rgba(0,0,0,0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            Feedback
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(0,0,0,0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}

export const SettingsPurchaseButton = ()=>{

    const navigation = useNavigation()

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('purchase')} style={style.button}>
                <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="shopping-cart" color={'rgba(0,0,0,0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            Purchase
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(0,0,0,0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}
export const SettingsLogOutButton = ()=>{

    const navigation = useNavigation()

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 60
        },
        button: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255,0,0,0.2)'
        },
        icon: {
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5
        },
        titre: {
            width: '75%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: 'black'
        }
    })


    return (
        <View style={style.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('signin')} style={style.button}>
                <View style={{width: "40%", height: '100%', flexDirection: 'row'}}>
                    <View style={style.icon}>
                        <MaterialIcons name="logout" color={'rgba(255,0,0, 0.5)'} size={30}/>
                    </View>
                    <View style={style.titre}>
                    <Text style={style.text}>
                            Logout
                    </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" color={'rgba(255,0,0, 0.5)'} size={40}/>
            </TouchableOpacity>
        </View>
    )
}



