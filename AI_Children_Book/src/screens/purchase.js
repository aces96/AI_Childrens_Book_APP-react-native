import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BasicPack, PremiumPack, UltimatePack } from "../components/purchase.component/component";
import { useNavigation } from "@react-navigation/native";
import { useStripe, usePaymentSheet } from "@stripe/stripe-react-native";
import { StripeProvider } from '@stripe/stripe-react-native';
import axios from "axios";
import {STRIPE_KEY} from "@env"


export const Purchase = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        tabBar: {
            width: '100%',
            height: 60,
            backgroundColor: '#009EFF',
            justifyContent: 'center'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,0.8)',
            marginHorizontal: 15,
            marginVertical: 15
        },
        packContainer: {
            flex: 1,
            backgroundColor: 'white'
        },
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
    const navigation = useNavigation()
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    const fetchPaymentSheetParams = async () => {
        const response = await axios.post('http://192.168.1.102:8080/api/payment-sheet')
        const { paymentIntent, ephemeralKey, customer} =  response.data;

        console.log('heeeeeeeeeeeeere',ephemeralKey);
    
        return {
          paymentIntent,
          ephemeralKey,
          customer,
        };
      };

      const initializePaymentSheet = async () => {
        const {
          paymentIntent,
          ephemeralKey,
          customer,
          publishableKey,
        } = await fetchPaymentSheetParams();
    
        const { error } = await initPaymentSheet({
        merchantDisplayName: 'achraf',
          customerId: customer,
          customerEphemeralKeySecret: ephemeralKey,
          paymentIntentClientSecret: paymentIntent,
          // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
          //methods that complete payment after a delay, like SEPA Debit and Sofort.
          allowsDelayedPaymentMethods: true,
          defaultBillingDetails: {
            name: 'Jane Doe',
          }
        });
        if (!error) {
            setLoading(true)
                    }
      };
      const openPaymentSheet = async () => {
          console.log('what the fuck');
          const {error} = await presentPaymentSheet();
        if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
        Alert.alert('Success', 'Your order is confirmed!');
        }
      };

      useEffect(() => {
        initializePaymentSheet();
        console.log('here');
      }, []);

    
    


    return (
        <StripeProvider stripeAccountId='acct_1L8qxeJhRzifapm9'  publishableKey={STRIPE_KEY}>

        <View style={style.container}>
            <View style={style.tabBar}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons  name="chevron-left" color={'white'} size={55}/>
                </TouchableOpacity>
            </View>

            <Text style={style.title}>
                Purchase
            </Text>

            <ScrollView style={style.packContainer}>
                <BasicPack handleClick={openPaymentSheet} />
                <PremiumPack handleClick={openPaymentSheet} />
                <UltimatePack />

                <TouchableOpacity onPress={()=>navigation.navigate('payment')} style={style.button}>
                    <Text style={{fontSize: 15, color: 'white'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        </StripeProvider>
    )
}