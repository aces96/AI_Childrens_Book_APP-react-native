import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, Pressable, ActivityIndicator } from "react-native";
import { ThemeComponent, CharacterComponent, PromptComponent } from "../components/StoryGener.components.js/components";
import { useDispatch } from "react-redux";
import { addStory } from "../assets/redux/slices/story.slice";
import { useNavigation } from "@react-navigation/native";
import { generateStory } from "../assets/apis/apis";



export const StoryGenerator = ()=>{

    const dispatch = useDispatch()

    const [characterInputValue, setCharacterInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [characters, setCharacters] = useState([])
    const [characterRem, setCharacterRem] = useState()
    const [theme, setTheme] = useState('')
    const [themeSelected, setThemeSelected] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([
        {label: 'adventure', value: 'adventure', key: 'adventure'},
        {label: 'aircraft', value: 'aircraft', key: 'aircraft'},
        {label: 'american', value: 'american', key: 'american'},
        {label: 'american', value: 'american', key: 'american'},
        {label: 'american', value: 'american', key: 'american'},
        {label: 'american', value: 'american', key: 'american'},
    ])

    const handleGenerate = async ()=>{
        try {
            setLoading(true)
            const generate = await generateStory(prompt, theme, characters)
            dispatch(addStory(generate))
            console.log('data', generate);
            setLoading(false)
            navigation.navigate('book')
        } catch (error) {
            console.log(error);
        }
    }

    const navigation = useNavigation()


    const story = [ "Where does it come from", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]

    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'transparent'
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
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          },
        centeredViews: {
            height: '90%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
            position: 'absolute',
            zIndex: 4
          },
        modalView: {
            width: '80%',
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
    })

    return (
        <View style={style.container}>
            <View style={style.topBar}>
            </View>
            <ScrollView style={style.parametersContainer}>
                <PromptComponent prompt={prompt} handlePrompt={(e)=>{
                    setPrompt(e)
                }}/>
                <CharacterComponent setCharacterRem={setCharacterRem} characters={characters} handleCharacter={()=>{
                    if(characterInputValue.length > 2){
                        setCharacters([...characters, characterInputValue])
                        setCharacterInputValue('')
                    }
                }} setCharacter={setCharacterInputValue} value={characterInputValue} removeCharacter={()=>{
                    const char =  characters.filter(char => char !== characterRem.es)
                    setCharacters(char)
                }} />
                <ThemeComponent openModal={()=>{
                    console.log('heere');
                    setOpenModal(true)
                }} themeSelected={setThemeSelected} selected={themeSelected} value={theme} setTheme={setTheme} removeTheme={()=>{
                    setThemeSelected(false)
                    setTheme('')
                }}/>
            </ScrollView>
            
            {openModal &&
            <View style={{height: '100%', width: '100%', position: 'absolute', zIndex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Pressable style={style.centeredViews} onPressIn={()=>{
                    setOpenModal(false)
                    console.log(openModal)
                }}>
                </Pressable>
                    <View style={{width: 300, height: 300, position: 'absolute', zIndex: 6, borderRadius: 10}}>
                        <ScrollView style={{backgroundColor: 'white', borderRadius: 10}}>
                            {data.map((e)=>{
                                return( 
                                    <TouchableOpacity onPress={()=>{
                                        setThemeSelected(true)
                                        setTheme(e.label)
                                        setOpenModal(false)
                                    }} style={{width: '90%', height: 60, justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderBottomWidth: 2, borderRadius: 10, marginVertical: 3, alignSelf: 'center'}}>
                                        <Text style={{color: 'black', fontSize: 20}}>
                                            {e.label}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>                     
                    </View>
            </View>
            
            }

            <TouchableOpacity onPress={handleGenerate} style={style.button}>
                {loading ? 
                    <ActivityIndicator size={30} color='white'/>
                : 
                    <Text style={style.buttonText}>
                        Generate Story
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}