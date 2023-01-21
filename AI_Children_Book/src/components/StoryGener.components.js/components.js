import React, {useRef, useState} from "react";
import { View, StyleSheet, TextInput, Text,TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';







export const ThemeComponent = ()=>{



    const style = StyleSheet.create({
        container: {
            flex: 1,
            marginVertical: 5,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        buttonsCont: {
            flex: 1,
            paddingVertical: 8,
        },
        button: {
            backgroundColor: 'white',
            width: '70%',
            padding: 3,
            borderRadius: 10,
            elevation: 5,
            margin: 5,
            borderWidth: 1,
            borderColor: '#009EFF',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        }
    })

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Theme:
            </Text>
            <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: '2' }} // or just '2'
            // onSelectItem={setSelectedItem}
            dataSet={[
                { id: '1', title: 'Alpha' },
                { id: '2', title: 'Beta' },
                { id: '3', title: 'Gamma' },
            ]}
            />
            <View style={style.buttonsCont}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        Action
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


export const CharacterComponent = ()=>{


    const fakeData = {
        id: 'some uniq string id',
        title: 'list item title'
    }



    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        buttonsCont: {
            flex: 1,
            paddingVertical: 8,
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        button: {
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 10,
            elevation: 5,
            margin: 5,
            borderWidth: 1,
            borderColor: '#009EFF'
        },
        text: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: '#009EFF'
        }
    })

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Characters:
            </Text>

            <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: '2' }} // or just '2'
            // onSelectItem={setSelectedItem}
            dataSet={[
                { id: '1', title: 'Alpha' },
                { id: '2', title: 'Beta' },
                { id: '3', title: 'Gamma' },
            ]}
            />

            <View style={style.buttonsCont}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        Achraf
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        Jack
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        lora
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        samuel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>
                        sara
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



export const PromptComponent = ()=>{






    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: 'black',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginVertical: 10
        },
        title: {
            fontSize: 25,
            fontFamily: 'Roboto-Regular',
            color: 'black'
        },
        input: {
            width: '100%',
            height: 80,
            alignSelf: 'center',
            marginVertical: 5,
            borderWidth: 2,
            borderColor: '#009EFF',
            borderRadius: 15
        }


    })

    // const handleClick = ()=>{

    // }



    return (
        <View style={style.container}>
            <Text style={style.title}>
                Prompt:
            </Text>

            <TextInput multiline={true} placeholder="enter your prompt" placeholderTextColor={'rgba(0,0,0,0.6)'} style={style.input}/>






        </View>
    )
}




