import React from "react";
import { View, StyleSheet } from "react-native";
import { NothingFoundIllustration, ImageCover, StoryTitle, PageComponent } from "../components/book.components/components";




export const Book = ()=>{

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center'
        }
    })


    return (
        <View style={style.container}>
            {/* <NothingFoundIllustration /> */}
            <ImageCover />
            <StoryTitle />
            <PageComponent />
        </View>
    )
}