import React,{useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { ImageView, EmailInput, PasswordInput, RePasswordInput, FullNameInput, SubmitButton } from "../components/register.components/components";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signUp } from "../assets/apis/apis";




export const SignUp = ()=>{

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage]  = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const validateEmail = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }
    
    const handleSubmit = async ()=>{
        if(fullname == '' || email == '' || password == '' || rePassword == ''){
            setError(true)
            setErrorMessage('please insert all informations')
        }

        if(!validateEmail(email)){
            setErrorMessage('please insert a valid email')
        }

        if(password != rePassword){
            setError(true)
            setErrorMessage('please re-type correct password')
        }

        if(fullname.length > 1 && email.length > 1 && password.length > 1 && rePassword.length > 1){
            setLoading(true)
            await signUp(fullname, email, password).then((res)=>{
                setLoading(false)
                navigation.navigate('signin')
            })
        }
    }

    const style = StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: 'white',
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
            height: '40%',
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
        <KeyboardAwareScrollView style={style.container}>
        <View style={style.container}>
            <ImageView />
            <View style={style.form}>
                    <Text style={style.title}>
                        Sign Up
                    </Text>
                    <View style={style.inputCont}>
                        <FullNameInput error={error} value={fullname} handleChange={(e)=>{
                            setFullname(e)
                        }}/>
                        <EmailInput error={error} value={email} handleChange={(e)=>{
                            setEmail(e)
                        }} />
                        <PasswordInput error={error} value={password} handleChange={(e)=>{
                            setPassword(e)
                        }} />
                        <RePasswordInput error={error} value={rePassword} handleChange={(e)=>{
                            setRePassword(e)
                        }}/>
                    </View>

                    <View style={style.buttonCont}>
                        <SubmitButton disabled={loading} handleSubmit={handleSubmit} />
                        <Text style={{fontSize: 13, color: 'black', textAlign: 'center'}}>
                            you already have account ?   <Text onPress={()=>navigation.navigate('signin')} style={{color: '#009EFF', textDecorationLine: 'underline'}}>Sign In</Text>
                        </Text>
                    </View>
                    {error && 
                        <Text style={{fontSize: 15, textAlign: 'center', color: 'rgb(255,148,148)'}}>
                            {errorMessage}
                        </Text>
                    }
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
}