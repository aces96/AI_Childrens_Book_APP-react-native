import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { ImageView, EmailInput, PasswordInput, SubmitButton } from "../components/register.components/components";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signIn } from "../assets/apis/apis";
import { storeData } from "../assets/storage/storage";








export const SignIn = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

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
            marginBottom: 10,
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
    
    const handleSubmit =  ()=>{
        if(email.length == 0 || password.length == 0){
            setError(true)
            setErrorMessage('please enter credentiels')
        }else if(email.length > 1 && password.length > 1){
            setLoading(true)
            signIn(email, password).then((res)=>{
                setLoading(false)
                const userInfo = {
                    userId: res.data.user_id,
                    token: res.data.token
                }
                console.log('info', userInfo);
                storeData(userInfo)
                navigation.navigate('home')
            }).catch((err)=>{
                setLoading(false)
                setError(true)
                setErrorMessage('something wrong, please check your credentiels and try again or tray again later')
            })
        }
    }


    return (
        <KeyboardAwareScrollView style={style.container}>
            <View  style={style.container}>
                <ImageView/>

                <View style={style.form}>
                    <Text style={style.title}>
                        Login
                    </Text>
                    <View style={style.inputCont}>
                        <EmailInput error={error} value={email} handleChange={(e)=>{
                            setEmail(e)
                        }}/>
                        <PasswordInput error={error} value={password} handleChange={(e)=>{
                            setPassword(e)
                        }}/>
                        <Text style={{fontSize: 12, color: '#009EFF', textDecorationLine: 'underline', textAlign: 'right', marginRight: 30, marginTop: 15}}>Forgot password ?</Text>
                    </View>

                    <View style={style.buttonCont}>
                            <SubmitButton disabled={loading} handleSubmit={handleSubmit} />
                            <Text style={{fontSize: 13, color: 'black', textAlign: 'center'}}>
                                Are you new here ?   <Text onPress={()=>navigation.navigate('signup')} style={{color: '#009EFF', textDecorationLine: 'underline'}}>Sign Up</Text>
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