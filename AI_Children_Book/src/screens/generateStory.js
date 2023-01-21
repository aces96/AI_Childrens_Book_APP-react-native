import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { ThemeComponent, CharacterComponent, PromptComponent } from "../components/StoryGener.components.js/components";



export const StoryGenerator = ()=>{

    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        topBar: {
            height: 60,
            width: '100%',
            backgroundColor: '#009EFF'
        },
        parametersContainer: {
            flex: 2,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'rgba(0,0,0,0.6)'
        },
        button: {
            width: '80%',
            height: 60,
            alignSelf: 'center',
            backgroundColor: '#009EFF',
            borderRadius: 15,
            marginVertical: 8,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonText: {
            fontSize: 20,
            color: 'white',
            fontFamily: 'Roboto-Medium'
        }
    })

    return (
        <View style={style.container}>
            <View style={style.topBar}>
            </View>
            <ScrollView style={style.parametersContainer}>
                <PromptComponent/>
                <CharacterComponent/>
                <ThemeComponent/>
            </ScrollView>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>
                    Generate Story
                </Text>
            </TouchableOpacity>
        </View>
    )
}