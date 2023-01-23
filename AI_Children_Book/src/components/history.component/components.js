import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";




export const HistoryStories = ()=>{

    const style=StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'rgba(0,0,0,0.7)'
        },
        item: {
            width: '100%',
            height: 60,
            borderWidth: 1,
            borderColor: '#009EFF',
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            flexDirection: 'row',
            marginVertical: 10
        },
        itemContent: {
            width: '80%',
            height: '100%',
            backgroundColor: 'black'
        },
        storyTitleCont: {
            height: '50%',
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.3)'
        },
        storyTitleCont1: {
            height: '50%',
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        storyTitle: {
            fontSize: 17,
            fontFamily: 'Roboto',
            color: 'black',
            marginHorizontal: 10
        },
        buttonCont: {
            height: '100%',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderLeftColor: 'rgba(0,0,0,0.3)'
        },
        button: {
            width: '97%',
            height: '60%',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            color: '#009EFF'
        }
    })


    return (
        <View style={style.container}>
            <View style={style.item}>
                <View style={style.itemContent}>
                    <View style={style.storyTitleCont}>
                        <Text style={style.storyTitle}>
                            this is the place for story title
                        </Text>
                    </View>
                    <View style={style.storyTitleCont1}>
                        <Text style={style.storyTitle}>
                            23/01/2023 08:08pm
                        </Text>
                    </View>
                </View>

                <View style={style.buttonCont}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text}>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.item}>
                <View style={style.itemContent}>
                    <View style={style.storyTitleCont}>
                        <Text style={style.storyTitle}>
                            this is the place for story title
                        </Text>
                    </View>
                    <View style={style.storyTitleCont1}>
                        <Text style={style.storyTitle}>
                            23/01/2023 08:08pm
                        </Text>
                    </View>
                </View>

                <View style={style.buttonCont}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text}>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.item}>
                <View style={style.itemContent}>
                    <View style={style.storyTitleCont}>
                        <Text style={style.storyTitle}>
                            this is the place for story title
                        </Text>
                    </View>
                    <View style={style.storyTitleCont1}>
                        <Text style={style.storyTitle}>
                            23/01/2023 08:08pm
                        </Text>
                    </View>
                </View>

                <View style={style.buttonCont}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text}>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.item}>
                <View style={style.itemContent}>
                    <View style={style.storyTitleCont}>
                        <Text style={style.storyTitle}>
                            this is the place for story title
                        </Text>
                    </View>
                    <View style={style.storyTitleCont1}>
                        <Text style={style.storyTitle}>
                            23/01/2023 08:08pm
                        </Text>
                    </View>
                </View>

                <View style={style.buttonCont}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text}>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.item}>
                <View style={style.itemContent}>
                    <View style={style.storyTitleCont}>
                        <Text style={style.storyTitle}>
                            this is the place for story title
                        </Text>
                    </View>
                    <View style={style.storyTitleCont1}>
                        <Text style={style.storyTitle}>
                            23/01/2023 08:08pm
                        </Text>
                    </View>
                </View>

                <View style={style.buttonCont}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.text}>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>


            
        </View>
    )
}