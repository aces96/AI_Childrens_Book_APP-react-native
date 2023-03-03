import React, {useState} from "react";
import { View, StyleSheet, TextInput, Text,TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';







export const ThemeComponent = (props)=>{
    const [value, setValue] = useState(undefined);
    const [selected, setSelected] = useState(false)



    const style = StyleSheet.create({
        container: {
            flex: 1,
            marginVertical: 5,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        buttonsCont: {
            flex: 1,
            paddingVertical: 8,
            
        },
        button: {
            backgroundColor: 'white',
            width: '70%',
            padding: 3,
            borderRadius: 10,
            elevation: 5,
            margin: 5,
            borderWidth: 1,
            borderColor: '#009EFF',
            alignSelf: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        },
        
    })

    const Modal = ()=>{

    }

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Theme:
            </Text>
            <View style={{borderWidth: 1, borderColor: '#009EFF', borderRadius: 10 }}>
                <TouchableOpacity onPress={()=>props.openModal()} activeOpacity={0.7}  style={{height: 50, width: '95%', backgroundColor: 'white', alignItems: 'flex-end', justifyContent: 'center', alignSelf: 'center'}}>
                    <MaterialIcons size={30} color='#009EFF' name="arrow-drop-down"/>
                </TouchableOpacity>
            </View>
            <View style={style.buttonsCont}>
                {props.selected &&
                    
                    <TouchableOpacity activeOpacity={1} style={style.button}>
                        <Text style={style.text}>
                            {props.value}
                        </Text>
                        <TouchableOpacity onPress={()=>props.removeTheme()}>
                            <MaterialIcons  name="close" size={30} color='#009EFF'/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                
                }
            </View>
        </View>
    )
}


export const CharacterComponent = (props)=>{
    const [character, setCharacter] = useState('');


    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        buttonsCont: {
            flex: 1,
            paddingVertical: 8,
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        button: {
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 10,
            elevation: 5,
            margin: 5,
            borderWidth: 1,
            borderColor: '#009EFF',
            flexDirection: 'row'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        }
    })

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Characters:
            </Text>

            <View style={{borderWidth: 1, borderColor: '#009EFF', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput value={props.value} onChangeText={(e)=>{props.setCharacter(e)}} placeholderTextColor={'rgba(0,0,0,0.7)'}  placeholder="father: sam" style={{width: '90%', height: 50, color: 'black'}}/>
                <TouchableOpacity onPress={()=>props.handleCharacter()}>
                    <MaterialIcons name="done" size={25} color='#009EFF'/>
                </TouchableOpacity>
            </View>

            <View style={style.buttonsCont}>

                {
                    props.characters.map((es)=>{
                        return (
                            <TouchableOpacity activeOpacity={1} style={style.button}>
                            <Text style={style.text}>
                                {es}
                            </Text>
                            <TouchableOpacity onPress={()=>{
                                props.setCharacterRem({es})
                                props.removeCharacter()
                            }}>
                                <MaterialIcons  name="close" size={30} color='#009EFF'/>
                            </TouchableOpacity>
                            </TouchableOpacity>
                        )

                    })
                }
            </View>

        </View>
    )
}



export const PromptComponent = (props)=>{


    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginVertical: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        input: {
            width: '100%',
            height: 80,
            alignSelf: 'center',
            marginVertical: 5,
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15,
            color: 'black'
        }


    })

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Prompt:
            </Text>

            <TextInput value={props.prompt} onChangeText={(e)=>{
                props.handlePrompt(e)

            }} multiline={true} placeholder="enter your prompt" placeholderTextColor={'rgba(0,0,0,0.6)'} style={style.input}/>






        </View>
    )
}





