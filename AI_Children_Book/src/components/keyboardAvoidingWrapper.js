import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";



export const KeyboardAvoidingWrapper = ({children})=>{

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}