import React from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native'





export const ImageView = ()=>{

    return (
            <Image style={{maxHeight: 200, maxWidth: 200, alignSelf: 'center'}} source={require("../../assets/images/kid.jpg")}/>
    )
}



export const EmailInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10,
            color: 'black'
        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} value={props.value} style={{...style.input, borderColor: props.error ? 'rgb(255,148,148)' : '#009EFF'    }} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'email@email.com'} />
    )
}


export const FullNameInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10,
            color: 'black'
        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} value={props.value} style={{...style.input, borderColor: props.error ? 'rgb(255,148,148)' : '#009EFF'    }} placeholder={'Fullname'} placeholderTextColor={'rgba(0,0,0,0.5)'} />
    )
}

export const PasswordInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10,
            color: 'black'

        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} secureTextEntry={true} value={props.value} style={{...style.input, borderColor: props.error ? 'rgb(255,148,148)' : '#009EFF'    }} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'Password'} />
    )
}

export const RePasswordInput = (props)=>{

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 15,
            elevation: 3,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            paddingLeft: 10,
            color: 'black'

        }
    })

    return (
        <TextInput onChangeText={(e)=>{
            props.handleChange(e)
        }} secureTextEntry={true} value={props.value} style={{...style.input, borderColor: props.error ? 'rgb(255,148,148)' : '#009EFF'    }} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder={'retype the Password'} />
    )
}


export const SubmitButton = (props)=>{

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
        <TouchableOpacity  onPress={()=>props.handleSubmit()} style={style.button}>
            {props.disabled ? 
                <ActivityIndicator size={35} color='white'/>
            : 
            <Text style={{fontSize: 15, color: 'white'}}>
            Submit
            </Text>}
        </TouchableOpacity>
    )
}