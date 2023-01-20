import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ImageView, EmailInput, PasswordInput, RePasswordInput, FullNameInput, SubmitButton } from "../components/register.components/components";





export const SignUp = ()=>{

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
            color: 'black',
            textAlign: 'left',
            marginLeft: 20,
            marginBottom: 20,
            fontFamily: 'Roboto-Bold'
        },
        inputCont: {
            height: '50%',
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
        <View style={style.container}>
            <ImageView />
            <View style={style.form}>
                    <Text style={style.title}>
                        Sign Up
                    </Text>
                    <View style={style.inputCont}>
                        <FullNameInput/>
                        <EmailInput />
                        <PasswordInput/>
                        <RePasswordInput/>
                    </View>

                    <View style={style.buttonCont}>
                        <SubmitButton />
                        <Text style={{fontSize: 13, color: 'black', textAlign: 'center'}}>
                            you already have account ?   <Text style={{color: '#009EFF', textDecorationLine: 'underline'}}>Sign In</Text>
                        </Text>
                    </View>
            </View>
        </View>
    )
}