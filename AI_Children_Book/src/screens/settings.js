import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SettingsHistoryButton, SettingsSavedButton, SettingsOptionsButton, SettingsFeedbackButton, SettingsPurchaseButton , SettingsLogOutButton} from "../components/settings.component/components";




export const Settings = ()=>{

    const style = StyleSheet.create({
        container:  {
            width: '100%',
            height: '100%'
        },
        topBar: {
            width: '100%',
            height: 60,
            backgroundColor: '#009EFF'
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,0.8)',
            marginHorizontal: 15,
            marginVertical: 15
        },
        buttonContainer: {
            backgroundColor: 'white',
            elevation: 5
        }
    })


    return (
        <View style={style.container}>
            <View style={style.topBar}></View>
            <View style={{width: "95%", height: 100, backgroundColor: 'white', alignSelf: 'center', marginTop: 5, elevation: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontFamily: 'Roboto-Bold', color: '#009EFF'}}>
                    DesignGod
                </Text>

                <Text style={{fontSize: 15, fontFamily: 'Roboto-Bold', color: 'black'}}>
                    subscription type: free
                </Text>
            </View>
            <Text style={style.title}>
                Settings
            </Text>

            <View style={style.buttonContainer}>
                <SettingsHistoryButton/>
                <SettingsSavedButton />
                <SettingsOptionsButton />
                <SettingsFeedbackButton />
                <SettingsPurchaseButton/>
                <SettingsLogOutButton />
            </View>
        </View>
    )
}