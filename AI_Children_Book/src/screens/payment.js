import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { BasicPack } from "../components/purchase.component/component";



export const Payment = ()=>{
    const { confirmPayment } = useStripe();

    const style = StyleSheet.create({
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: 'white'
        },
        title: {
            fontSize: 30,
            fontFamily: 'Roboto-Medium',
            color: 'black',
            marginVertical: 20,
            marginHorizontal: 15
        },
        text: {
            fontSize: 15,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,0.7)',
            marginVertical: 20,
            marginHorizontal: 15,
            textAlign: 'center'
        },
        button: {
            width: '95%',
            height: 60,
            backgroundColor: '#009EFF',
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15
        }
    })





    return (
        <View style={style.container}>
            <Text style={style.title}>
                Payment
            </Text>

            <BasicPack/>
            <Text style={style.text}>
                Please enter you card and submit to complete the payment
            </Text>

            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: 'white',
                    textColor: '#009EFF',
                    borderColor: '#009EFF',
                    borderWidth: 1,
                    placeholderColor: 'grey',
                    borderRadius: 10,
                    
                }}
                style={{
                    width: '95%',
                    height: 80,
                    marginVertical: 30,
                    alignSelf: "center",
                    elevation: 5,
                    shadowColor: '#009EFF',
                    backgroundColor: 'white',
                }}
                onCardChange={(cardDetails) => {
                    console.log('cardDetails', cardDetails);
                }}
                onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                }}
                />

                <TouchableOpacity style={style.button}>
                    <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium', color: 'white'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
        </View>
    )
}