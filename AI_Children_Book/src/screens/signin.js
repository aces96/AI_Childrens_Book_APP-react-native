import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { ImageView, EmailInput, PasswordInput, SubmitButton } from "../components/register.components/components";







export const SignIn = ()=>{

    const style = StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'space-between'
        },
        form: {
            width: '100%',
            height: '65%',
        },
        title: {
            fontSize: 40,
            color: 'rgba(0,158,255, 0.6)',
            textAlign: 'center',
            marginBottom: 20,
            fontFamily: 'Roboto-Bold'
        },
        inputCont: {
            height: '33%',
            marginTop: 10,
            justifyContent: 'space-between',
        },
        buttonCont: {
            width: '100%',
            height: "20%",
            justifyContent: 'space-around',
            marginTop: 20
        }
    })

    return (
        <View  style={style.container}>
            <ImageView/>

            <View style={style.form}>
                <Text style={style.title}>
                    Login
                </Text>
                <View style={style.inputCont}>
                    <EmailInput/>
                    <PasswordInput/>
                    <Text style={{fontSize: 12, color: '#009EFF', textDecorationLine: 'underline', textAlign: 'right', marginRight: 30, marginTop: 15}}>Forgot password ?</Text>
                </View>

                <View style={style.buttonCont}>
                        <SubmitButton />
                        <Text style={{fontSize: 13, color: 'black', textAlign: 'center'}}>
                            Are you new here ?   <Text style={{color: '#009EFF', textDecorationLine: 'underline'}}>Sign Up</Text>
                        </Text>
                    </View>

            </View>
        </View>
    )
}