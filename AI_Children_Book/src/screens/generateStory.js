import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { ThemeComponent, CharacterComponent, PromptComponent } from "../components/StoryGener.components.js/components";
import { useDispatch } from "react-redux";
import { addStory } from "../assets/redux/slices/story.slice";
import { useNavigation } from "@react-navigation/native";



export const StoryGenerator = ()=>{

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const story = [ "Where does it come from", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]

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

            <TouchableOpacity onPress={()=>{
                dispatch(addStory(story))
                navigation.navigate('book')
            }} style={style.button}>
                <Text style={style.buttonText}>
                    Generate Story
                </Text>
            </TouchableOpacity>
        </View>
    )
}