import React from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native'





export const ImageView = ()=>{

    const style = StyleSheet.create({
        imageCont: {
            height: '35%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    return (
        <View style={style.imageCont}>
            <Image style={{maxHeight: 300, maxWidth: 300}} source={require("../../assets/images/kid.jpg")}/>
        </View>
    )
}



export const EmailInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10
        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} value={props.value} style={style.input} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'email@email.com'} />
    )
}


export const FullNameInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10


        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} value={props.value} style={style.input} placeholder={'Fullname'} placeholderTextColor={'rgba(0,0,0,0.5)'} />
    )
}

export const PasswordInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10

        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} secureTextEntry={true} value={props.value} style={style.input} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'Password'} />
    )
}

export const RePasswordInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10

        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} secureTextEntry={true} value={props.value} style={style.input} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'retype the Password'} />
    )
}


export const SubmitButton = ()=>{

    const style = StyleSheet.create({
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
        <TouchableOpacity style={style.button}>
            <Text style={{fontSize: 15, color: 'white'}}>
                Submit
            </Text>
        </TouchableOpacity>
    )
}